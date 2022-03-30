class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.string :restaurant_name
      t.integer :restaurant_price
      t.string :item_name
    
      t.timestamps
    end
  end
end
