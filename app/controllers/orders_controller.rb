class OrdersController < ApplicationController
    def index
        orders = Order.all 
        render json: orders, status: :ok
    end 

    def show
        order = Order.find(params[:id])
        render json: order, status: :ok
    end 

    def create
        order = Order.create!(order_params)
        render json: order, status: :created
    end

    
    def update
        order = Order.find(params[:id])
        Order.update!(order_params)
        render json: order, status: :ok
    end 


    def destroy
        order = Order.find(params[:id])
        order.destroy
        head :no_content
    end 
    
    private 
    def order_params
        params.permit(:production_id, :user_id, :price)
    end 
end