class Api::VideosController < ApplicationController
    def index
        @videos = Video.all
        render :index
    end

    def show
        @video = Video.find(params[:id])
        
        if @video
            render :show
        else
            render json: @video.errors.full_messages, status: 404
        end
    end

end
