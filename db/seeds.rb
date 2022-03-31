# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
user = User.create([{ username: '' }, { password: '' }])



puts "Creating users..."

puts "Creating movies..."
o1 = Order.create(restaurant_name: "Her", restaurant_price: 30, item_name: "lol")
o2 =  Order.create(restaurant_name: "Hrthnwser", restaurant_price: 50, item_name: "hiiel")
o3 =  Order.create(restaurant_name: "Hgawrgtr", restaurant_price: 70, item_name: "lollol")

puts "Creating reviews..."

Favorite.create(rating: 3, restaurant_name: "Star Wars is one of my favorite movies.  I watch it a couple of times a year.", restaurant_image:"https://images.unsplash.com/photo-1640622332381-1c4ddf3bdeb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60")
Favorite.create(rating: 2, restaurant_name: "I'm not sure why I even watched Uncharted",restaurant_image: "https://images.unsplash.com/photo-1640622332381-1c4ddf3bdeb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60")

