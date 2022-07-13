class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.integer :user_id, null: false
      t.string :profile_name, null: false
      t.timestamps
    end
    add_index :profiles, [:user_id, :profile_name], unique: true
  end
end
