class GamesController < ApplicationController
  def new
    @game = Game.new
  end

  def create
    @game = Game.create(game_params)
  end

  def game_params
    params.require(:game).permit(:name, :icon, :banner)
  end
end
