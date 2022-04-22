class CreateFavorites < ActiveRecord::Migration[6.1]
  def change
    create_table :favorites do |t|
      t.string :restaurant_image
      t.string :restaurant_name
      t.float :rating
      t.timestamps
    end
  end
end
