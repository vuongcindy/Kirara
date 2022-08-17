class UpdateWatchlist < ActiveRecord::Migration[5.2]
  def change
    add_index :watchlists, [:profile_id, :video_id], unique: true
  end
end
