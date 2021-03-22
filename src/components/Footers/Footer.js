/*eslint-disable*/
import React from "react";
// reactstrap components
import {
  Button
} from "reactstrap";
import "assets/vendor/font-awesome/css/font-awesome.min.css";

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="facebook"
          href="https://www.facebook.com/creativetim"
          id="tooltip837440414"
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i class="fa fa-linkedin" aria-hidden="true" />
          </span>
        </Button>

        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="github"
          href="https://github.com/creativetimofficial"
          id="tooltip495507257"
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-github" />
          </span>
        </Button>
      </>
    );
  }
}

export default SimpleFooter;
