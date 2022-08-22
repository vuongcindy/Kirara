class ApplicationController < ActionController::Base
    # remove before production
    skip_before_action :verify_authenticity_token
    # end remove before production
    
    helper_method :current_user, :logged_in?, :require_logged_in

    # before_action :current_user

    private
    def current_user
        return nil if !session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def require_logged_in
        if !current_user
            render json: { base: ['Invalid Credentials'] }, status: 401
        end
    end

    def login!(user)
        user.reset_session_token!
        session[:session_token] = user.session_token
        @current_user = user
    end

    def logged_in?
        !!current_user
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end
end
