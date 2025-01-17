import React from "react";
import {
  BottomNavigationAction,
  BottomNavigation,
  makeStyles,
  AppBar,
  Container,
  Toolbar,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import useApplicationData from "../hooks/useApplicationData";
import MyWishlist from "./MyWishlist";
import MySuggestions from "./MySuggestions";
import MyProposals from "./MyProposals";
import AddNewItem from "./AddNewItem";
import Listings from "./Listings";
import Profile from "./Profile";
import Listing from "./Listing";
import DropDownMenu from "./DropDownMenu";
import ProposeTrade from "./ProposeTrade";
import AcceptedProposal from "./AcceptedProposal";
import { categories } from "../mockData/categories";
import {
  findMostRepresented,
  getUserProposals,
  getTradesProposedToUser,
  getPicturesOfListingsByUser,
  getPicturesOfListingsWantedByUser,
  getPicturesOfListingsOfferedToUser,
  getPicturesOfListingsWantedFromUser
} from "../helpers/selectors";
import "./App.css";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#e9c46a",
    color: "white",
    bottom: 0,
    left: "0px",
    position: "fixed",
    justifyContent: "center",
    height: "70px",
    display: "flex",
    right: "0px",
    width: "100%",
    "& .MuiBottomNavigationAction-root": {
      "@media (max-width: 736px)": {
        minWidth: "auto",
        padding: "6px 0",
      },
    },
  },
});

export default function App() {
  const {
    state,
    publishListing,
    propose,
    updateProposalStatus,
    updateWishes,
    removeWish,
    updateReviews,
  } = useApplicationData();

  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <>
      <Router>
        <Container maxWidth="xs">
          <div className="App">
            <header className="App-header">
              <AppBar elevation={0} className={classes.root}>
                <Toolbar className="Toolbar">
                  <p className="Pagetitle">Trade It</p>

                  <DropDownMenu className="DropDown" />
                </Toolbar>
              </AppBar>
            </header>
            <section>
              <Switch>
                <Route exact path="/profile/:userId">
                  <Profile
                    users={state.users}
                    listings={state.listings}
                    reviews={state.reviews}
                    proposals={state.proposals}
                  />
                </Route>
                <Route exact path="/profile">
                  <Profile
                    users={state.users}
                    listings={state.listings}
                    reviews={state.reviews}
                    proposals={state.proposals}
                  />
                </Route>
                <Route exact path="/wishlist">
                  <MyWishlist
                    wishes={state.wishes}
                    listings={state.listings}
                    updateWishes={updateWishes}
                    removeWish={removeWish}
                    proposals={state.proposals}
                    categories={categories}
                    findMostRepresented={findMostRepresented}
                  />
                </Route>
                <Route exact path="/suggestions">
                  <MySuggestions
                    wishes={state.wishes}
                    listings={state.listings}
                    proposals={state.proposals}
                  />
                </Route>
                <Route exact path="/proposals">
                  <MyProposals
                    proposals={state.proposals}
                    listings={state.listings}
                    updateProposalStatus={updateProposalStatus}
                    userProposals={getUserProposals(state)}
                    tradesProposedToUser={getTradesProposedToUser(state)}
                    picturesOfListingsByUser={getPicturesOfListingsByUser(
                      state,
                      getUserProposals(state)
                    )}
                    picturesOfListingsWantedByUser={getPicturesOfListingsWantedByUser(
                      state,
                      getUserProposals(state)
                    )}
                    picturesOfListingsOfferedToUser={getPicturesOfListingsOfferedToUser(
                      state,
                      getTradesProposedToUser(state)
                    )}
                    picturesOfListingsWantedFromUser={getPicturesOfListingsWantedFromUser(
                      state,
                      getTradesProposedToUser(state)
                    )}
                  />
                </Route>
                <Route exact path="/add">
                  <AddNewItem
                    listings={state.listings}
                    publishListing={publishListing}
                    categories={categories}
                  />
                </Route>
                <Route exact path="/">
                  <Listings
                    listings={state.listings}
                    proposals={state.proposals}
                  />
                </Route>
                <Route exact path="/listings/:listingId">
                  <Listing listings={state.listings} />
                </Route>
                <Route exact path="/offer/:listingId">
                  <ProposeTrade listings={state.listings} propose={propose} />
                </Route>
                <Route exact path="/accepted/:proposalId">
                  <AcceptedProposal
                    proposals={state.proposals}
                    listings={state.listings}
                    updateReviews={updateReviews}
                    userProposals={getUserProposals(state)}
                    tradesProposedToUser={getTradesProposedToUser(state)}
                  />
                </Route>
              </Switch>
            </section>

            <footer>
              <BottomNavigation
                className={classes.root}
                showLabels
                value={value}
                onChange={(event, newValue) => handleChange(event, newValue)}
                style={{ color: "white" }}
              >
                <BottomNavigationAction
                  component={Link}
                  to="/"
                  label="Search"
                  icon={<SearchIcon />}
                />
                <BottomNavigationAction
                  component={Link}
                  to="/wishlist"
                  label="Wishlist"
                  icon={<FavoriteBorderIcon />}
                />
                <BottomNavigationAction
                  component={Link}
                  to="/suggestions"
                  label="Suggestions"
                  icon={<EmojiObjectsIcon />}
                />
                <BottomNavigationAction
                  component={Link}
                  to="/proposals"
                  label="Proposals"
                  icon={<AutorenewIcon />}
                />
                <BottomNavigationAction
                  component={Link}
                  to="/add"
                  label="New"
                  icon={<AddCircleOutlineIcon />}
                />
              </BottomNavigation>
            </footer>
          </div>
        </Container>
      </Router>
    </>
  );
}
