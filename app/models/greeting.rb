class Greeting < ApplicationRecord
    validates :content, presence: true
  
    def self.random
      offset(rand(count)).first
    end
  end
  