import React, { Component } from "react";
import "./faq.css";

class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p className="faqHeader">FAQs</p>
        <p className="faqq1">
          What is the difference between Public Figures and General Users?
        </p>
        <p className="faqa1">
          Just as how many social media pages recognize users as "verified",
          Forum regards those with leadership roles in their communities as
          Public Figures. Only Public Figures can participate in a debate, but
          both General Users and Public Figures have the capacity to vote for
          who they would like to debate and what should be debated.
        </p>
      </div>
    );
  }
}

export default Faq;
