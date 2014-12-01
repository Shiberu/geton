class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :name
      t.attachment :icon
      t.attachment :banner

      t.timestamps
    end
  end
end
