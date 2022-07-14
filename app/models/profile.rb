class Profile < ApplicationRecord
    validates :profile_name, presence: true
    validates :profile_name, uniqueness: { scope: :user_id }

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
end
