class UpdateWatchlistName < ActiveRecord::Migration[5.2]
  def change
    remove_index :watchlists, [:profile_id, :video_id]
    rename_table :watchlists, :watchlist_items
  end
end
