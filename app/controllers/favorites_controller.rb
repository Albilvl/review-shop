class FavoritesController < ApplicationController

    skip_before_action :authorized, only: [:create]
    def index 
        render json: Favorite.all, status: :ok
    end 

    def show
        favorite = Favorite.find(params[:id])
        render json: favorite, include: :orders, status: :ok
    end 

    def create
        favorite = Favorite.create!(production_params)
    end 

    def update 
        favorite = Favorite.find(params[:id])
        favorite.update!(favorite_params)
        render json: favorite, status: :ok
    end 

    def destroy
        favorite = Favorite.find(params[:id])
        favorite.destroy
        head :no_content 
    end 

    private


    def production_params
        params.permit(:restaurant_name, :restaurant_image, :rating)
    end 

end