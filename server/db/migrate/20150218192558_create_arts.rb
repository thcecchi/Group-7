class CreateArts < ActiveRecord::Migration
  def change
    create_table :arts do |t|
      t.string :title
      t.text :description
      t.string :artist
      t.string :dimensions

      t.timestamps null: false
    end
  end
end
