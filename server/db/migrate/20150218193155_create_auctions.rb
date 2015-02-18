class CreateAuctions < ActiveRecord::Migration
  def change
    create_table :auctions do |t|
      t.datetime :startx
      t.datetime :endx
      t.integer :startingbid
      t.references :art, index: true

      t.timestamps null: false
    end
    add_foreign_key :auctions, :arts
  end
end
