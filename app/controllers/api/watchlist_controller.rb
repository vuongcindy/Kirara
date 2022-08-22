class Api::WatchlistController < ApplicationController

    # profile watchlist
    def index
        @watchlists = []
        current_user.profiles.includes(:videos).each do |profile|
            @watchlists += profile.watchlists
        end
    end

    def show
        @watchlist = Watchlist.find_by(id: params[:id])

        if @watchlist
            render :show
        else
            render json: @watchlist.errors.full_messages, status: 404
        end
    end

    # add watchlist item
    def create
        @watchlist = WatchlistItems.create(watchlist_params)

        if @watchlist.save
            render :show
        else
            render json: @watchlist.errors.full_messages, status: 404
        end
    end

    # delete watchlist item
    def destroy
        @watchlist = WatchlistItems.find(params[:id])
        if @watchlist
            @watchlist.destroy
            render :show
        else
            render json: @watchlist.errors.full_messages, status: 404
        end
    end

    private
    def watchlist_params
        params.require(:watchlist_item).permit(:profile_id, :video_id)
    end

end
