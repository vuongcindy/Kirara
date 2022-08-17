require 'open-uri'
class Profile < ApplicationRecord
    validates :profile_name, presence: true, length: { minimum: 1 }, uniqueness: { scope: :user_id }

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    has_many :videos,
        through: :watchlist_items

    has_many :watchlist_items,
        primary_key: :id,
        foreign_key: :profile_id,
        class_name: :WatchlistItems

    has_one_attached :avatar

    before_validation :ensure_attached_avatar

    def ensure_attached_avatar
        if !self.avatar.attached?
            file = URI.open('https://kirara.s3.us-west-1.amazonaws.com/chubby_smile.jpeg')
            self.avatar.attach(io: file, filename: 'chubby_smile.jpeg')
        end
    end
end
