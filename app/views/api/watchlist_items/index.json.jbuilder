@watchlist_items.each do |watchlist_item|
    json.set! watchlist_item.id do
        json.partial! "api/watchlist_items/watchlist_item", watchlist_item: watchlist_item
    end
end