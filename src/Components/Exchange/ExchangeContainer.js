import React, { Component } from "react";
import Exchange from "./Exchange";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

class ExchangeContainer extends Component {
  render() {
    return (
      <div>
        {/* {this.props.data.isTodayLoading &&
        this.props.data.isYesterdayLoading ? (
          <CircularProgress size={50} />
        ) : (
          <Exchange />
        )} */}

        <Exchange />
        {/* {console.log(this.props.data)} */}
      </div>
    );
  }
}

export default connect(state => ({
  data: state.PriceChange
}))(ExchangeContainer);
