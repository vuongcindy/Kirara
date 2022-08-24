class Api::WatchlistItemsController < ApplicationController

    # profile watchlist
    def index
        @watchlists = []
        current_user.profiles.includes(:videos).each do |profile|
            @watchlists += profile.watchlists
        end
    end

    def show
<<<<<<< HEAD
        @watchlist = WatchlistItems.find_by(id: params[:id])
=======
        @watchlist = WatchlistItem.find_by(id: params[:id])
>>>>>>> 8d4bade (connect clone to repo)

        if @watchlist
            render :show
        else
            render json: @watchlist.errors.full_messages, status: 404
        end
    end

    # add watchlist item
    def create
<<<<<<< HEAD
        @watchlist = WatchlistItems.create(watchlist_params)

=======
        @watchlist = WatchlistItem.create(watchlist_item_params)
>>>>>>> 8d4bade (connect clone to repo)
        if @watchlist.save
            render :show
        else
            render json: @watchlist.errors.full_messages, status: 404
        end
    end

    # delete watchlist item
    def destroy
<<<<<<< HEAD
        @watchlist = WatchlistItems.find(params[:id])
=======
        @watchlist = WatchlistItem.find(params[:id])

>>>>>>> 8d4bade (connect clone to repo)
        if @watchlist
            @watchlist.destroy
            render :show
        else
            render json: @watchlist.errors.full_messages, status: 404
        end
    end

    private
<<<<<<< HEAD
    def watchlist_params
=======
    def watchlist_item_params
>>>>>>> 8d4bade (connect clone to repo)
        params.require(:watchlist_item).permit(:profile_id, :video_id)
    end

end
