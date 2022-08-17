class CreateWatchlists < ActiveRecord::Migration[5.2]
  def change
    create_table :watchlists do |t|
      t.integer :profile_id
      t.integer :video_id

      t.timestamps
    end
  end
end
