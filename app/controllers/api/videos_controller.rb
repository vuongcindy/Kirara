class Api::VideosController < ApplicationController
    def index
        @videos = Videos.all
        render :index
    end

    def show
        @video = Video.find(params[:id])
    end

end
