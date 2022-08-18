@watchlists.each do |watchlist|
    json.set! watchlist.id do
        json.partial! "api/watchlists/watchlist", watchlist: watchlist
    end
end