require 'test_helper'

class BidTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  test 'attributes' do
    da_bid = bids(:first_bid)

    assert da_bid.amount.present?
    assert da_bid.bidder.present?
    assert da_bid.auction.present?

    assert da_bid.auction.art.title.present?
  end
end
