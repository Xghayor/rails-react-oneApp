Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :greetings
    end
  end
  get '/greetings', to: 'root#index'

  root 'root#index'
end
