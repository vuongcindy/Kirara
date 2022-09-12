@videos.each do |video|
    json.set! video.id do
        json.extract! video, :id, :title, :description, :studio, :genre, :year, :runtime, :video_type

        json.thumbnailUrl video.thumbnail.attached? ? url_for(video.thumbnail) : ""

        json.backgroundUrl video.background.attached? ? url_for(video.background) : ""

        json.videoUrl video.video.attached? ? url_for(video.video) : ""
    end
end