class BidsController < ApplicationController

  def index
    @bids = Bid.all
    respond_to do |format|
      format.json { json: @bids.to_json } 
      format.html 
    end
  end

  def create
    @bid = Bid.create bid_params
    Pusher["auction-#{@bid.auction.id}"].trigger('bid_received', { amount: @bid.amount, bidder: @bid.bidder })
    respond_to do |format|
      format.json { json: @bid.to_json } 
      format.html 
    end
  end

  def update 
    @bid = Bid.find params[:id]
    @bid.update_attributes bid_params
    respond_to do |format|
      format.json { json: @bid.to_json } 
      format.html 
    end
  end

  def destroy
    @bid = Bid.find params[:id]
    @bid.delete
    respond_to do |format|
      format.json { render nothing: true } 
      format.html 
    end
  end

private 

  def bid_params
    params.require(:bid).permit(
      :amount,
      :bidder
      )
  end
end


