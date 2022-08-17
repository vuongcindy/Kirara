class WatchlistItems < ApplicationRecord
    belongs_to :profile,
        primary_key: :id,
        foreign_key: :profile_id,
        class_name: :Profile

    belongs_to :videos,
        primary_key: :id,
        foreign_key: :video_id,
        class_name: :Video
end
