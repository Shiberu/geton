class HomeController < ApplicationController
  def index
  end

  def add_game
    @games = Game.all
  end
end
