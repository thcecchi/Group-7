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

  test '#update' do
    foo = arts(:starry_night)
    bar = foo.title
    params = {:id => foo.id, :title => "foozoo"}
    put :update, format: :json, art: params, id: foo.id
    assert_equal response.code, '200'
  end

  test '#destroy' do
    foo = Art.first
    params = {id: foo.id}
    assert_difference 'Art.count', -1 do
      delete :destroy, format: :json, id: foo.id
    end
  end




    





























end
