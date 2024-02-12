module Api
  module V1
    class GreetingsController < ApplicationController
      def index
        @greetings = Greeting.random_greeting
        render json: @greetings
      end
    end
  end
end
