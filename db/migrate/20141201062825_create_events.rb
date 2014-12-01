class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.datetime :created_at
      t.datetime :expires_at
      t.integer :owner_id
      t.references :user

      t.timestamps
    end
  end
end
