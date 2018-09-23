import React, { Component } from 'react';
import { connect } from 'react-redux';
import GarmentOption from '../components/GarmentOption';
import { Button, Typography, TextField, withStyles, Grid, InputAdornment, FormControl, InputLabel, Input } from '@material-ui/core';
import Search from '@material-ui/icons/Search';

// import { diff } from 'deep-object-diff';

const styles = {
  container: {
    margin: "5vw"
  },
  searchSection: {
    fontSize: "40px",
    margin: "3px 0px",
  },
  buttonWidth: {
    width: "95%",
    margin: "0 2.5%",
    backgroundColor: "#7A98E7"
  }
};

class AddClothingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updatedAttributes: [
        {
          name: 'The only T-shirt',
          type: 'T_SHIRT',
          materials: [
            {
              material: "",
              percentage: 0,
            }
          ],
          washingPeriod: 1,
        },
      ]
    };
    this.renderGarmentList = this.renderGarmentList.bind(this);
  }

  goToResultPage() {
    window.location.href = 'result';
  }

  renderGarmentList() {
    return this.state.updatedAttributes.map((item) => {
       return <div>
        {item.type}
      </div>
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Typography variant="display1">
              Garment Type
            </Typography>
          </Grid>
          <Grid item xs={12} className="direction-type-1 full-width">
            <Typography variant="caption">
              Start your entry with garment type
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.searchSection}>
            <Input
              id="input-with-icon-adornment"
              fullWidth
              placeholder="Search garment"
              startAdornment={
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              }
            />
          </Grid>
          <Grid container>
            <Grid item xs={3}>
              <GarmentOption />
            </Grid>
            <Grid item xs={3}>
              <GarmentOption />
            </Grid>
            <Grid item xs={3}>
              <GarmentOption />
            </Grid>
            <Grid item xs={3}>
              <GarmentOption />
            </Grid>
            <Grid item xs={3}>
              <GarmentOption />
            </Grid>
            <Grid item xs={3}>
              <GarmentOption />
            </Grid>
            <Grid item xs={3}>
              <GarmentOption />
            </Grid>
            <Grid item xs={3}>
              <GarmentOption />
            </Grid>
          </Grid>
          <Grid item xs={1} />

          {this.renderGarmentList()}

          <Grid item xs={12}>
            <Grid item xs={5}>
              <Button
                variant="contained"
                className={classes.buttonWidth}
                color="primary" onClick={this.goToResultPage}>
                Save
              </Button>
            </Grid>
            <Grid item xs={5}>
              <Button
                variant="contained"
                color="primary"
                className={classes.buttonWidth}>
                Add Another
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddClothingPage));
