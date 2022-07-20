class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.string :studio, nulll: false
      t.string :genre, null: false
      t.integer :year, null: false
      t.integer :runtime, null: false
      t.string :video_type, null: false
      t.timestamps
    end
    add_index :videos, :title
    add_index :videos, :studio
    add_index :videos, :genre
    add_index :videos, :video_type
  end
end
