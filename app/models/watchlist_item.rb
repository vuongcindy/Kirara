class WatchlistItem < ApplicationRecord
    belongs_to :profile,
        primary_key: :id,
        foreign_key: :profile_id,
        class_name: :Profile

    belongs_to :video,
        primary_key: :id,
        foreign_key: :video_id,
        class_name: :Video
end
