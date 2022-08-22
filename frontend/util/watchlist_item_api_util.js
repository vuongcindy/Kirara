export const fetchWatchlistItems = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/watchlist_items'
    })
};

export const fetchWatchlistItem = id => {
    return $.ajax({
        method: 'GET',
        url: `/api/watchlist_items/${id}`
    })
};

export const createWatchlistItem = watchlist_item => (
    $.ajax({
        method: 'POST',
        url: '/api/watchlist_items',
        data: { watchlist_item }
    })
)

export const deleteWatchlistItem = id => (
    $.ajax({
        method: 'DELETE',
        url: `/api/watchlist_items/${id}`
    })
);