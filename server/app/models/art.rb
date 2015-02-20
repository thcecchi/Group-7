class Art < ActiveRecord::Base
  has_many :auctions, dependent: :destroy
end
