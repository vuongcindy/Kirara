class RemoveAvatarProfile < ActiveRecord::Migration[5.2]
  def change
    remove_column :profiles, :avatar
  end
end
