Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :profiles, only: [:index, :create, :update, :destroy, :show]
    resources :videos, only: [:index, :show]
  end
  root 'static_pages#root'
end
