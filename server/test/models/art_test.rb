require 'test_helper'

class ArtTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test 'attributes' do
    art = arts(:starry_night)

    assert art.title.present?
    assert art.description.present?
    assert art.artist.present?
    assert art.dimensions.present?
  end
end
