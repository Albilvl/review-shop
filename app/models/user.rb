class User < ApplicationRecord 
    has_secure_password

    validates :username, :email, uniqueness: true{ case_sensitive: false }

    validate :must_have_perferred_email 

    def must_have_perferred_email
        unless email.match?(/gmail.com|yahoo.com|hotmail.com|outlook.com|aol.com/)
            errors.add(:email, "Sorry, we only allow specific email providers")
        end 

    end
  end