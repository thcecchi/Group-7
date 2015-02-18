class Art < ActiveRecord::Base
  has_attached_file :image, :styles => { large: "1600x1600>", medium: "300x300>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
end
