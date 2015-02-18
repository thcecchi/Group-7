class AuctionsController < ApplicationController
  # WE NEED INDEX/CREATE/UPDATE/DESTROY
  def index
    @auctions = Auction.all
    respond_to do |format|
      format.json { json: @auctions.to_json }
      format.html
    end
  end

  # def new
  #   @auction = Auction.new
  # end

  def create
    @auction = Auction.create auction_params
    redirect_to root_path
  end

  # def show
  #   @auction = Auction.find params[:id]
  # end

  # def edit
  #   @auction = Auction.find params[:id]
  # end

  def update
    @auction = Auction.find params[:id]
    @auction.update_attributes auction_params
    respond_to do |format|
      format.json { json: @auctions.to_json }
      format.html
    end
  end

  def destroy
    @auction = Auction.find params[:id]
    @auction.delete
    respond_to do |format|
      format.json { json: @auctions.to_json }
      format.html
    end
  end



  private
  def auction_params
    params.require(:auction).permit(
      :startx,
      :endx,
      :startingbid
      )
  end
end