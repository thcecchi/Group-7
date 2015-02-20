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
        dimensions: '1in x 30in',
        image_url: 'http://www.online-image-editor.com//styles/2014/images/example_image.png'
    }

    assert_difference 'Art.count' do
      post :create, format: :json, art: test_attributes
    end

    assert_equal response.code, '200'

    last_art = Art.last

    assert_equal last_art.title, 'The Red Pony'
    assert_equal last_art.description, 'It has a red pony!'
    assert_equal last_art.artist, 'Adam'
    assert_equal last_art.dimensions, '1in x 30in'
    assert_equal last_art.image_url, 'http://www.online-image-editor.com//styles/2014/images/example_image.png'
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
