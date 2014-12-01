class GamesController < ApplicationController
  def index
    @games = Game.all
  end

  def new
    @game = Game.new
  end

  def create
    @game = Game.new(game_params)
    if @game.save
      redirect_to games_path
    else
      redirect_to games_path
      flash[:error] = @game.errors.full_messages.to_sentence
    end
  end

  def game_params
    params.require(:game).permit(:name, :icon, :banner)
  end
end
