require 'test_helper'

class ArtsControllerTest < ActionController::TestCase
  # test "the truth" do
  #   assert true
  # end

  test '#index' do

    get :index, format: :json

    assert_equal response.code, '200'

    results = JSON.parse(response.body)

    refute_empty results
    assert results.first['title'].present?
  end

  test '#create' do
    test_attributes = {
        title: 'The Red Pony',
        description: 'It has a red pony!',
        artist: 'Adam',
        dimensions: '1in x 30in'
    }

    assert_difference 'Art.count' do
      post :create, format: :json, art: test_attributes
    end

    assert_equal response.code, '200'
  end
end
