class Greeting < ApplicationRecord
  validates :content, presence: true
end
