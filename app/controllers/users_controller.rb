class Users::SessionsController < Devise::SessionsController
  def add_game
    @games = Game.all
  end
end