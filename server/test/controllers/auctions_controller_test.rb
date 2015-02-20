require 'test_helper'

class AuctionsControllerTest < ActionController::TestCase
  # test "the truth" do
  #   assert true
  # end

  test '#index' do
    get :index, format: :json
    assert_equal response.code, '200'
    results = JSON.parse(response.body)
    refute_empty results
    assert results.first['startx'].present?
  end

  test '#create' do
    auction_attributes = {
      startx: Time.now.to_s,
      endx: (Time.now + 1.hour).to_s,
      starting_bid: 1000,
    }

    art_attributes = {
      title: "Mona Borat",
      description: "very nahhhs",
      dimensions: "adsfs",
      artist: "Borat"
    }

    assert_difference 'Auction.count' do
      post :create, format: :json, auction: auction_attributes, art: art_attributes
    end

    assert_equal response.code, '200'
  end

  test '#update' do
    foo = auctions(:first_auction)
    bar = foo.startx
    params = { startx: (Time.now + 5.hour).to_s}
    put :update, format: :json, auction: params, id: foo.id
    assert_equal response.code, '200'
  end

  test '#destroy' do
    foo = Auction.first
    params = {id: foo.id}
    assert_difference 'Auction.count', -1 do
      delete :destroy, format: :json, id: foo.id
    end
  end



end
