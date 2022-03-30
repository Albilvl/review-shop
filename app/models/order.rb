class Order < ApplicationRecord
    belongs_to :user

    validates :restaurant_price, numericality: {greater_than_or_equal_to: 0}

end
