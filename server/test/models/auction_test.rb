require 'test_helper'

class AuctionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  test 'attributes' do
    first_auction = auctions(:first_auction)

    assert first_auction.startx.present?
    assert first_auction.endx.present?
    assert first_auction.startingbid.present?
    assert first_auction.art.present?
  end
end
