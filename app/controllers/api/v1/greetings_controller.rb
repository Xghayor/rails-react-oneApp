module Api
    module V1
      class GreetingsController < ApplicationController
        def index
          @greetings = Greeting.random
          render json: @greetings
        end
      end
    end
  end
  