class CreateJoinsTableUserGame < ActiveRecord::Migration
  def change
    create_table :joins_table_user_games do |t|
      t.string :user
      t.string :game
    end
  end
end
