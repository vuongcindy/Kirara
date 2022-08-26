class Api::WatchlistItemsController < ApplicationController

    # profile watchlist
    def index
        @watchlist_items = []
        current_user.profiles.includes(:videos).each do |profile|
            @watchlist_items += profile.watchlist_items
        end
    end

    def show
        @watchlist_item = WatchlistItem.find_by(id: params[:id])

        if @watchlist_item
            render :show
        else
            render json: @watchlist_item.errors.full_messages, status: 404
        end
    end

    # add watchlist item
    def create
        @watchlist_item = WatchlistItem.new(watchlist_item_params)
        if @watchlist_item.save
            render :show
        else
            render json: @watchlist_item.errors.full_messages, status: 404
        end
    end

    # delete watchlist item
    def destroy
        @watchlist_item = WatchlistItem.find(params[:id])

        if @watchlist_item
            @watchlist_item.delete
            render :show
        else
            render json: @watchlist_item.errors.full_messages, status: 404
        end
    end

    private
    def watchlist_item_params
        params.require(:watchlist_item).permit(:profile_id, :video_id)
    end

end
