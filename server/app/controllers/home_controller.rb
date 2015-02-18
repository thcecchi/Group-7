class HomeController < ApplicationController
  def index
    @auctions = Auction.all
    @arts = Art.all
    @bids = Bid.all
  end
end
