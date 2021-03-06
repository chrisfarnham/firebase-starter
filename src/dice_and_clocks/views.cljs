(ns dice-and-clocks.views
  (:require
   [re-frame.core :as rf]
   [reagent.core :as r]
   [clojure.string :as string]
   [dice-and-clocks.firebase-auth :as auth]
   [dice-and-clocks.firebase-database :as db]
   [dice-and-clocks.subs :as subs]
   [dice-and-clocks.config :as config]
   ))

(defn auth-display [user]
  [:div
   (when user
     [:span (str "Logged in as: " (or (:displayName user) (:email user)))])
   [:br]
   [:button {:on-click #(rf/dispatch [(if user ::auth/sign-out ::auth/sign-in)])}
    (if user
      "Sign out"
      "Sign in")]])

(defn add-todo [persist-todo]
  (r/with-let [new-todo (r/atom nil)]
    [:<>
     [:div "Input new Todo:"]
     [:input {:type  :text
              :value @new-todo
              :on-change
              (fn [^js e] (reset! new-todo (.. e -target -value)))}]
     [:button {:disabled (string/blank? @new-todo)
               :on-click (fn []
                           (persist-todo @new-todo)
                           (reset! new-todo nil))} "Save"]]))

(defn todo-list [todos mark-done]
  [:div
   [:h2 "Todos"]
   (->> todos
        (remove (fn [[_ {:keys [done?]}]]
                  done?))
        (map (fn [[id {:keys [description]}]]
               ^{:key id}
               [:div {:style {:padding "5px"
                              :border-bottom "solid"
                              :border-color "gray"}}
                [:span {:style {:margin-right "5px"}} description]
                [:button {:on-click #(mark-done id)} "Done"]])))])


(defn main-panel []
  (let [name (rf/subscribe [::subs/name])
        user @(rf/subscribe [::auth/user-auth])
        db-connected? @(rf/subscribe [::db/realtime-value {:path [:.info :connected]}])
        todos-path [:users (:uid user) :todos]
        todos @(rf/subscribe [::db/realtime-value {:path todos-path}])]
    [:div
     [:h1 "Hello from " @name]
     [auth-display user]
(when user
  (if db-connected?
    [:div
     [:br]
     [add-todo (fn [todo]
                 (rf/dispatch
                  [::db/push {:value {:description todo}
                              :path  todos-path}]))]
     [todo-list todos
      (fn [todo-id]
        (rf/dispatch
         [::db/push {:value true
                     :path  (concat todos-path [todo-id :done?])}]))]]
    [:div "Loading.."]))
     ]))
