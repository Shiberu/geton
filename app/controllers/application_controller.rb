class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def configure_permitted_parameters
  	devise_parameter_sanitizer.for(:sign_in) { |u| u.permit(:username, :email) }
  	devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:first_name, :last_name ,:username, :email, :password, :password_confirmation) }
  end
end
