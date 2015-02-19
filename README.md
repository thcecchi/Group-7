# To install Rails

Follow the instructions at http://installrails.com/

# To setup DB

Install MySQL (`$ brew install mysql`). You may also want to install [SequelPro](http://www.sequelpro.com/).

# To generate fake data

While in the `server/` directory, run the command `$ rake db:fake_data`.  (Be sure to run `$ rake db:create` and `$ rake db:migrate` first.)

# To start the Rails server

`rails s -p 9000`

# Dependencies for Paperclip

You may need to install ImageMagick to run Paperclip.  To install ImageMagick, just run `$ brew install imagemagick`.