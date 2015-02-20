class SwitchImageToFieldInArts < ActiveRecord::Migration
  def change
    # requires Paperclip
    remove_attachment :arts, :image
    add_column :arts, :image_url, :string
  end
end
