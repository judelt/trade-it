# Trade it

Proof of concept web application for trading items you no longer need for others you want. Don't buy, just trade it and help create a more sustainable future.<br />
I came out with the idea for this app idea inspired by the story of Kyle Macdonald, a Canadian blogger who famously bartered his way from "one red paperclip" to a house in a sequence of 14 trades.<br/><br/>
Back-end: Rails, PostgreSQL. <br/>
Front-end: React, CSS, Material UI, Ant Design.<br/>

Group project with Thomas Weideman [@tw77](https://github.com/tw77). Final project for [Lighthouse Labs](https://www.lighthouselabs.ca/). <br/>See the 5 minute presentation [here](https://drive.google.com/file/d/14ERGPDsyN8u-6ETYoHKIY3qpd8c5P_py/view).

### My contribution
- Pair programmed to build the back end with Ruby on Rails.
- Pair programmed to create the database with PostgreSQL and migrations with Rails.
- Worked with React to build the components using Material UI and Ant Design.
- Styled the app with CSS, Bootstrap, and build-in style from Material UI and Ant Design.

## How it works

  #### Browse and search for listings
  <img src="docs/01_Browse_and_search_for_items.gif" width="300"/>

  #### View a particular listing
  <img src="docs/02_Go_particular_listing.gif" width="300"/>

  #### View a user's profile, listings and reviews
  <img src="docs/03_Go_user_profile.gif" width="300"/><br /><br />

  #### Propose a trade
  <img src="docs/04_Propose_trade.gif" width="300"/><br /><br />

  #### Manage proposals & leave a review
  <img src="docs/05_Proposals_tab.gif" width="300"/><br /><br />

  #### Wishlist
  <img src="docs/06_Wishlist_tab.gif" width="300"/><br /><br />

  #### Add a new listing
  <img src="docs/07_New_listing.gif" width="300"/><br /><br />

  #### Suggestions
  <img src="docs/08_Suggestions.png" width="300"/><br /><br />
  
## Setup
1. Fork this repository, then clone your fork of this repository.
2. In one terminal, run `bundle` to install the dependencies. Run `bin/rake db:setup` to create the databases (called rails_project_development). Run `bin/rails s` to run the server.
3. In the other terminal, `cd` into `client`. Run `npm install`. Then run `npm start`.
4. Go to `localhost:3000` in your browser.
