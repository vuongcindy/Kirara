json.extract! video, :id, :title, :description, :studio, :genre, :year, :runtime, :video_type

json.thumbnailUrl video.thumbnail.attached? ? url_for(video.thumbnail) : ""