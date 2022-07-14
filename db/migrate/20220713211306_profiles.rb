class Profiles < ActiveRecord::Migration[5.2]
  def change
    remove_index :profiles, column: [:user_id, :profile_name]
    add_index :profiles, :user_id
  end
end
