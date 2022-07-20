class Video < ApplicationRecord
    validates :title, :description, :studio, :year, :runtime, :video_type, presence: true

    has_one_attached :thumbnail
end
