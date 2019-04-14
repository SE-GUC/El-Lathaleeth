import React, { Component } from "react";
import Navbar from "../components/layout/Navbar";
import img from "../components/Assets/bg.jpeg.jpg";
import img2 from "../components/Assets/st.jpeg.jpg";
import Carousel from "../components/Carousel";
import "../styles/styles.css";
import "bootstrap/dist/css/bootstrap.css";

class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container-fluid no-padding">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <img src={img} className="img-fluid center-block" alt="hi" />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row jumbotron">
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
              <p className="lead">
                This is a jumbotron for el lathaleeth where will be writing any
                kind of a welcome note/or important news that would motivate the
                investor to learn more.
              </p>
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
                <a href="#">
                  {" "}
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-lg"
                  >
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div clasName="row welcome text-center">
            <div className="col-12">
              <h1 className="display-4">Africa's Most Prosperous Market</h1>
            </div>
            <div className="col-12">
              <p className="lead text-center">
                A nation with a plenty of resources and a mindset of winning,
                your ideal choice for Investment
              </p>
            </div>
            <hr className="my-4" />
          </div>
        </div>

        <div className="container-fluid padding">
          <div className="row text-center padding">
            <div className="col-xs-12 col-sm-6 col-md-4">
              <i className="material-icons md-48">account_balance</i>
              <h3>Ministry of Trade</h3>
              <p>Encouraging Investment in Egypt</p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <i className="material-icons md-48">account_balance</i>
              <h3>Central Bank Of Egypt</h3>
              <p>Stable and Steadily Growth is the key to our future</p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <i className="material-icons md-48">account_balance</i>
              <h3>General Authority for Investment</h3>
              <p>Welcome to the land of the pharoas</p>
            </div>
          </div>
          <hr className="my-4" />
        </div>
        <div className="container-fluid padding">
          <div className="row padding">
            <div className="col-lg-6">
              <h2>If you invest in Egypt...</h2>
              <p>
                ·The Egyptian Economy's resilience is capable of overcoming its
                economic challenges as it did in the 2008 financial crisis, and
                long-term investors will see many opportunities.
              </p>
              <p>
                {" "}
                ·Egypt has started its transformation to a stable, democratic
                and modern economy, where the dividends of growth and prosperity
                will be shared by all who participated in its achievement.
              </p>
              <p>
                {" "}
                ·The Egyptian economy's ability to post positive real economic
                growth rates amid the global economic downturn as well as during
                the political unrest that prevailed in 2011-2013 indicates how
                resilient economic activity in Egypt.
              </p>
              <br />
              <a
                href="https://www.gafi.gov.eg/English/whyegypt/pages/reasonstoinvestinegypt.aspx"
                className="btn btn-primary"
              >
                Read More
              </a>
            </div>
            <div className="col-lg-6">
              <img src={img2} className="img-fluid" alt="hi" />
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <figure>
          <div className="fixed-wrap">
            <div id="fixed" />
          </div>
        </figure>

        <footer className="page-footer grey darken-3 fixed bottom width-100%">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">About</h5>
                <p className="grey-text text-lighten-4">
                  A website by the people for the people.
                </p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      Meet Lathaleeth
                    </a>
                  </li>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container align left">
              © 2019 Sumerge feat.Lathaleeth
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Homepage;
