Rails.application.routes.draw do
  # resources :orders
  # post "/add", to:"orders#create"
  # post "/update", to: "orders#update"
  # delete "/remove", to: "orders#destroy"

  # resources :favorites, only:[:create, :index, :destroy]
  # post "/add", to:"favorites#create"
  # post "/update", to: "favorites#update"
  # delete "/remove", to: "favorites#destroy"

  resources :users, only: [:create]
  post "/login", to: "auth#create"
  get "/auto_login", to: "auth#auto_login"
  post "/logged_in", to: "application#logged_in?"
  get "/favorites", to: "favorites#index"
  post "/favorites", to: "favorites#create"
end
