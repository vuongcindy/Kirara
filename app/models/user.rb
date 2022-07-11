class User < ApplicationRecord
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    attr_reader :password

    after_initialize :ensure_session_token

    # has_many :profiles,
    #     primary_key: :id,
    #     foreign_key: user_id:,
    #     class_name: :Profile

    def self.find_by_credentials(email, password)
        @user = User.find_by(email: email)

        if @user
            if @user.is_password?(password)
                return @user
            end
        end
        nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        password_obj = BCrypt::Password.new(self.password_digest)
        password_obj.is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save
        self.session_token
    end

    private
    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end
end
