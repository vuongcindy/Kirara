class Api::ProfilesController < ApplicationController

    def index
        # debugger
        @profiles = current_user.profiles
        render :index
    end

    def show
        @profile = Profile.find(params[:id]) 
    end

    def create
        # debugger
        @profile = Profile.new(profile_params)
        @profile.user_id = current_user.id
        
        # @profile.avatar.attach(io: URI.open(get_random_avatar()))

        if @profile.save
            # debugger
            render json: @profile.errors.full_messages
        else
            render json: @profile.errors.full_messages, status: 406
        end
    end

    # def get_random_avatar
    #     image_urls = [
    #         "https://kirara.s3.us-west-1.amazonaws.com/lightsaber_boy.jpg",
    #         "https://kirara.s3.us-west-1.amazonaws.com/chubby_smile.jpeg"
    #     ]
    
    #     image_index = rand(1..2).to_i
    #     image_urls[image_index]
    # end

    def update
        @profile = Profile.find(params[:id])
        
        if @profile.update(profile_params)
            render :show
        else
            render json: @profile.errors.full_messages, status: 406
        end
    end

    def destroy
        # debugger
        @profile = Profile.find(params[:id])
        if (@profile && current_user.profiles.length > 1)
            @profile.delete
            # debugger
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
