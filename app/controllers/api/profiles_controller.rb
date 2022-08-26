class Api::ProfilesController < ApplicationController

    def index
        @profiles = current_user.profiles
        render :index
    end

    def show
        @profile = Profile.find(params[:id]) 
    end

    def create
        @profile = Profile.new(profile_params)
        @profile.user_id = current_user.id

        if @profile.save
            render :show
        else
            render json: @profile.errors.full_messages, status: 406
        end
    end

    def update
        @profile = Profile.find(params[:id])
        
        if @profile.update(profile_params)
            render :show
        else
            render json: @profile.errors.full_messages, status: 406
        end
    end

    def destroy
        @profile = Profile.find(params[:id])
        if (@profile && current_user.profiles.length > 1)
            @profile.delete
            render :show
        else
            render json: ['Unable to delete profile']
        end
    end

    private
    def profile_params
        params.require(:profile).permit(:profile_name)
    end
end
