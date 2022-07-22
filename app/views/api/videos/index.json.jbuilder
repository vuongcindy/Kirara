@videos.each do |video|
    json.set! video.id do
        json.partial! "api/videos/video", video: video
        if video.thumbnail.attached?
            json.thumbnail url_for(video.thumbnail)
        end
    end
end