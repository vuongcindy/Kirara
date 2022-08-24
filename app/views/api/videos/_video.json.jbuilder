json.extract! video, :id, :title, :description, :studio, :genre, :year, :runtime, :video_type, :watchlist_item

json.thumbnailUrl video.thumbnail.attached? ? url_for(video.thumbnail) : ""