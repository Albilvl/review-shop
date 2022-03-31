class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]
  
    def create
      user = User.create(user_params)

        if user.valid? 
            render json: {user: user, status: :created}
        else
            render json: {error: 'failed to create user', status: not_acceptable}
    end
end
  
    def show
      render json: @current_user
    end
  
    private
  
    def user_params
      params.require(:user).permit (:password, :password_confirmation, :image_url, :bio)
    end
  
  end