Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :profiles, only: [:index, :create, :update, :destroy, :show]
    resources :videos, only: [:index, :show]
    resources :watchlist_items, only: [:index, :show, :create, :destroy]
  end
  root 'static_pages#root'
end
