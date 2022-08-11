json.partial! 'video', video: @video

json.backgroundUrl @video.background.attached? ? url_for(@video.background) : ""

json.videoUrl @video.video.attached? ? url_for(@video.video) : ""