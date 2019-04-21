import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
const axios = require("axios");

export default class Checkout extends React.Component {
  constructor(props){
    super(props);
    this.onToken  = this.onToken.bind(this)
  }
  onToken = async (token) => {
    const pay = await axios
      .post(
        "http://localhost:5000/api/forms/payStripe/" +
          this.props.form.id,
          token
      )
      .then(res => {
        console.log(res.data.msg);
        this.props.payStripe.bind(this, this.props.form._id)
      });
    // TODO: Send the token information and any other
    // relevant information to your payment process
    // server, wait for the response, and update the UI
    // accordingly. How this is done is up to you. Using
    // XHR, fetch, or a GraphQL mutation is typical.
  };

  render() {
    return (
      <StripeCheckout
        stripeKey="pk_test_ehmOPhRUvVaC3R1XELIBuWLA00OHh1Xpvt"
        token={this.onToken}
        label="Pay with 💳"
      />
    )
  }
}