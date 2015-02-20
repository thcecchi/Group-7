class AuctionsController < ApplicationController
  # WE NEED INDEX/CREATE/UPDATE/DESTROY
  def index
    @auctions = Auction.all
    respond_to do |format|
      format.json { render json: @auctions.to_json }
      format.html
    end
  end


  def create
    @art = Art.create art_params
    @auction = @art.auctions.create auction_params
    respond_to do |format|
      format.json { render json: @auction.to_json }
      format.html
    end 
  end


  def update
    @auction = Auction.find params[:id]
    @auction.update_attributes auction_params
    respond_to do |format|
      format.json { render json: @auction.to_json }
      format.html
    end
  end

  def destroy
    @auction = Auction.find params[:id]
    @auction.destroy
    respond_to do |format|
      format.json { render nothing: true }
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

  def art_params
    params.require(:art).permit(
      :title,
      :description,
      :artist,
      :dimensions
    )
  end
end





