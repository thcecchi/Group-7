class AddBidAmountToAuctions < ActiveRecord::Migration
  def change
    add_column :auctions, :bid_amount, :integer
  end
end
