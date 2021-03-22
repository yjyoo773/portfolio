import React from "react";
import classnames from "classnames";
import "assets/vendor/nucleo/css/nucleo.css";
import MyNavBar from "components/Navbars/MyNavBar";
import Footer from "components/Footers/Footer";

// reactstrap components
import {
  Container,
  Row,
  Col,
  NavItem,
  NavLink,
  Nav,
  Card,
  CardBody,
  TabContent,
  TabPane,
  Button
} from "reactstrap";

class Projects extends React.Component {
  state = {
    iconTabs: 1,
    plainTabs: 1,
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index,
    });
  };
  render() {
    return (
      <>
        <MyNavBar />

        <div className="position-relative">
          <section className="section-sm section-hero section-shaped pb-0">
            <Container className="shape-container d-flex align-items-center pt-5">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="9">
                    <h1 className="text-success display-2 mb-0 my-3">
                      Projects
                    </h1>
                    {/* <UncontrolledCarousel
                      className="text-secondary"
                      items={items}
                      style={{ maxHeight: "70%" }}
                      onClick={() => this.toggleModa("modalTrig")}
                    /> */}
                    <div className="nav-wrapper">
                      <Nav
                        className="nav-fill flex-column flex-md-row"
                        id="tabs-icons-text"
                        pills
                        role="tablist"
                      >
                        <NavItem className="success">
                          <NavLink
                            aria-selected={this.state.iconTabs === 1}
                            className={classnames("mb-sm-3 mb-md-0", {
                              active: this.state.iconTabs === 1,
                            })}
                            onClick={(e) => this.toggleNavs(e, "iconTabs", 1)}
                            href="#"
                            role="tab"
                            // style={{color: "#2dce89",  backgroundColor: "#fff"}}
                          >
                            Baseball Number Game
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            aria-selected={this.state.iconTabs === 2}
                            className={classnames("mb-sm-3 mb-md-0", {
                              active: this.state.iconTabs === 2,
                            })}
                            onClick={(e) => this.toggleNavs(e, "iconTabs", 2)}
                            href="#"
                            role="tab"
                          >
                            Spotify Recommendation System
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            aria-selected={this.state.iconTabs === 3}
                            className={classnames("mb-sm-3 mb-md-0", {
                              active: this.state.iconTabs === 3,
                            })}
                            onClick={(e) => this.toggleNavs(e, "iconTabs", 3)}
                            href="#"
                            role="tab"
                          >
                            Project 301
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                    <Card className="shadow">
                      <CardBody>
                        <TabContent
                          activeTab={"iconTabs" + this.state.iconTabs}
                        >
                          <TabPane tabId="iconTabs1">
                            <img
                              src={require("assets/img/baseball_game.jpeg")}
                              alt="baseball game"
                            />
                            <p
                              className="description"
                              style={{ textAlign: "left" }}
                            >
                              <li>
                                A number guessing game using basic baseball
                                terminology.
                              </li>
                              <li>Created using HTML5, CSS, JavaScript</li>
                            </p>
                            <Button
                              className="btn-icon-only rounded-circle ml-1"
                              color="github"
                              href="https://yjyoo773.github.io/BaseballGame/"
                              target="_blank"
                            >
                              <span className="btn-inner--icon">
                                <i className="fa fa-github" />
                              </span>
                            </Button>
                          </TabPane>
                          <TabPane tabId="iconTabs2">
                            <img src={require("assets/img/spotify_rec.png")} 
                            alt="spotify rec system"/>
                            <p
                              className="description"
                              style={{ textAlign: "left" }}
                            >
                              <li>
                                Recommends songs based on given playlist using
                                scikit-learn and spotipy
                              </li>
                              <li>
                                Using Python, clean data with regular
                                expressions and Numpy
                              </li>
                              <li>
                                OneHotEncode song features creating a sparse
                                matrix to vectorize songs implemented by TF-IDF
                              </li>
                              <li>
                                Integrate Spotify’s API to connect with user’s
                                personal playlist
                              </li>
                              <li>
                                Utilize cosine similarity to find songs most
                                similar to user’s playlist and recommend
                              </li>
                              <li>
                                Visualize the albums of recommended songs using
                                Matplotlib
                              </li>
                            </p>

                            <Button
                              className="btn-icon-only rounded-circle ml-1"
                              color="github"
                              href="https://github.com/yjyoo773/spotify_rec"
                              target="_blank"
                            >
                              <span className="btn-inner--icon">
                                <i className="fa fa-github" />
                              </span>
                            </Button>
                          </TabPane>
                          <TabPane tabId="iconTabs3">
                            <p
                              className="description"
                              style={{ textAlign: "left" }}
                            >
                              Raw denim you probably haven't heard of them jean
                              shorts Austin. Nesciunt tofu stumptown aliqua,
                              retro synth master cleanse. Mustache cliche
                              tempor, williamsburg carles vegan helvetica.
                              Reprehenderit butcher retro keffiyeh dreamcatcher
                              synth.
                            </p>
                          </TabPane>
                        </TabContent>
                      </CardBody>
                    </Card>
                    <hr className="mt-6" />
                  </Col>
                </Row>
              </div>
              <Footer />
            </Container>
          </section>
        </div>
      </>
    );
  }
}

export default Projects;
