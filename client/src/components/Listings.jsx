import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Card,
  AppBar,
  Toolbar,
  CircularProgress,
  Typography,
  TextField,
  CardMedia,
  Container,
  CssBaseline,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 8),
    paddingTop: "100px",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardMedia: {
    paddingTop: "100%",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
  },
}));

export default function Listings(props) {
  const classes = useStyles();
  const history = useHistory();
  const [filter, setFilter] = useState();
  const acceptedProposals = props.proposals.filter(
    (proposal) => proposal.is_accepted === true
  );
  const unavailableListingIds = acceptedProposals.map(
    (proposal) => proposal.listing_id
  );
  const unavailableAssetIds = acceptedProposals.map(
    (proposal) => proposal.asset_id
  );
  unavailableListingIds.push(...unavailableAssetIds);
  const availableListings = props.listings.filter(
    (listing) => !unavailableListingIds.includes(listing.id)
  );

  function handleSearchChange(e) {
    setFilter(e.target.value.toLowerCase());
  };

  function getListingCard(listingsId, name, picture) {
    return (
      <Grid item xs={6} sm={6} md={4} key={listingsId}>
        <Card
          className={classes.card}
          onClick={() => history.push(`/listings/${listingsId}`)}
        >
          <CardMedia
            className={classes.cardMedia}
            image={picture}
            title={name}
          />
        </Card>
      </Grid>
    );
  }

  return (
    <>
      <CssBaseline />
      <div className={classes.heroContent}>
        <Typography variant="h5" align="left" color="textPrimary">
          Explore listings
        </Typography>
        <AppBar
          position="static"
          align="left"
          style={{ background: "transparent", boxShadow: "none" }}
        >
          <Toolbar>
            <div>
              <SearchIcon align="left" />
              <TextField
                onChange={handleSearchChange}
                label="Search"
                variant="standard"
              />
            </div>
          </Toolbar>
        </AppBar>
        {availableListings ? (
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {availableListings.map(
                (item) =>
                  ((item.name.toLowerCase().includes(filter) &&
                    item.category_id <= 12) ||
                    !filter) &&
                  getListingCard(item.id, item.name, item.picture)
              )}
            </Grid>
          </Container>
        ) : (
          <div className={classes.progress}>
            <CircularProgress />
          </div>
        )}
      </div>
    </>
  );
}
