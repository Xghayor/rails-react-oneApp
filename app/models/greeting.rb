class Greeting < ApplicationRecord
  validates :content, presence: true

  def self.random_greeting
    order('Random()').first
  end
end
