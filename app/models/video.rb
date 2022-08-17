class Video < ApplicationRecord
    validates :title, :description, :studio, :year, :runtime, :video_type, presence: true

    has_one :watchlist_items,
        primary_key: :id,
        foreign_key: :video_id,
        class_name: :WatchlistItems

    has_one_attached :thumbnail
    has_one_attached :background
    has_one_attached :video
end
