json.(@art, :id, :title, :description, :dimensions, :artist)

json.endTime @auction.endx
json.bidAmount @auction.bid_amount

if @bid
  json.mostRecentBidder @bid.bidder
  json.latestBidAmount @bid.amount
else
  json.mostRecentBidder ''
  json.latestBidAmount @auction.startingbid
end