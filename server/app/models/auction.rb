class Auction < ActiveRecord::Base
  belongs_to :art
  has_many :bids, dependent: :destroy
end
