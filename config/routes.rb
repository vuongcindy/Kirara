Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :profiles, only: [:index, :create, :show, :update, :destroy]
  end
  root 'static_pages#root'
end
