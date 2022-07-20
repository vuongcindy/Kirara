class AddDefaultImageProfile < ActiveRecord::Migration[5.2]
  def change
    remove_column :profiles, :avatar
    add_column :profiles, :avatar, :string, default: 'https://kirara.s3.us-west-1.amazonaws.com/chubby_smile.jpeg'
  end
end
