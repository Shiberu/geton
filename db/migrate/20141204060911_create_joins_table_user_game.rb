class CreateJoinsTableUserGame < ActiveRecord::Migration
  def change
    create_table :articles_tags, :id => false do |t|
      t.references :article, :tag
    end

    add_index :articles_tags, [:article_id, :tag_id]


    create_table :games_users, :id => false do |t|
      t.references :user, :game
    end
  end
end
