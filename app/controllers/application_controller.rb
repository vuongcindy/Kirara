class ApplicationController < ActionController::Base
    
    helper_method :current_user, :logged_in?, :require_logged_in

    private
    def current_user
        return nil if !session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def require_logged_in
        if !current_user
            render json: { base: ['invalid credentials'] }, status: 404
        end
    end

    def login!(user)
        session[:session_token] = user.reset_session_token!
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
