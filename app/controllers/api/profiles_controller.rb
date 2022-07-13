class Api::ProfilesController < ApplicationController

    def index
        @profile = Profile.all
        render 'api/profiles'
    end

    def create
        @profile = Profile.new(profile_params)

        if @profile.save
            render 'api/profiles'
        else
            render json: @profile.errors.full_messages, status: 406
        end
    end

    def show
        @profile = Profile.find(params[:id])
    end

    def update
        @profile = Profile.find(params[:id])
        
        if @profile.update(profile_params)
            render 'api/profiles'
        else
            render json: @profile.errors.full_messages, status: 406
        end
    end

    def destroy
        @profile = Profile.find(params[:id])

        delete @profile
        
    end

    private
    def profile_params
        params.require(:profile).permit(:profile_name)
    end
end
