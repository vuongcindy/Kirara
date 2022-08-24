class Video < ApplicationRecord
    validates :title, :description, :studio, :year, :runtime, :video_type, presence: true

    has_one :watchlist_item,
        primary_key: :id,
        foreign_key: :video_id,
        class_name: :WatchlistItem

    has_one_attached :thumbnail
    has_one_attached :background
    has_one_attached :video
end
