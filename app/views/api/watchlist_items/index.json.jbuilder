@watchlist_items.each do |watchlist_item|
    json.set! watchlist_item.id do
        json.extract! watchlist_item, :id, :profile_id, :video_id
    end
end