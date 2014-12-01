class Game < ActiveRecord::Base
  has_attached_file :icon, :styles => {:default => "180x180>"}
  validates_attachment_content_type :icon, :content_type => /\Aimage\/.*\Z/

  has_attached_file :banner, :styles => {:default => "1080x608"}
  validates_attachment_content_type :icon, :content_type => /\Aimage\/.*\Z/
end
