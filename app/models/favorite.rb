class Favorite < ApplicationRecord
    belongs_to :user

    validates :rating, numericality: {greater_than_or_equal_to: 0}

end
