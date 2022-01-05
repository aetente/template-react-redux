import React, { Component } from "react";
import "./styles.css";
import { connect } from "react-redux";
import { testOperation } from "../../operations/testOperations";

class Test extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.testOperation();
  }

  render() {
    let { common } = this.props;
    console.log(common);
    return (
      <div className="login-holder">
        <div>TEST</div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    common: state.common,
  };
};

export default connect(mapStateToProps, {
  testOperation,
})(Test);
