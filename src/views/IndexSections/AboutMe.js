import React from "react";
import MyNavBar from "components/Navbars/MyNavBar";
import Footer from "components/Footers/Footer";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

class AboutMe extends React.Component {
  render() {
    return (
      <>
        <MyNavBar />
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section-sm section-hero section-shaped pb-0">
            <Container className="shape-container d-flex align-items-center pt-5">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="9">
                    <h1 className="text-success display-2 mb-0 mt-3">About Me</h1>
                    <Row>
                      <Col>
                        <h3
                          className="h4 text-success font-weight-bold mt-sm-3"
                          style={{ textAlign: "left" }}
                        >
                          Education
                        </h3>
                        <h4
                          className="lead font-weight bold my-sm-2"
                          style={{ textAlign: "left" }}
                        >
                          Code Fellows
                        </h4>
                        <p
                          className="text-muted"
                          style={{ textAlign: "left", fontSize: "0.9rem" }}
                        >
                          Mar 2021 - Jun 2021 <br />
                          Software Developement in Full-Stack JavaScript
                        </p>
                        <h4
                          className="lead font-weight bold my-sm-2"
                          style={{ textAlign: "left" }}
                        >
                          University of Washington
                        </h4>
                        <p
                          className="text-muted"
                          style={{ textAlign: "left", fontSize: "0.9rem" }}
                        >
                          Sep 2015 - Mar 2019 <br />
                          Bachelor of Arts in Mathematics
                        </p>
                      </Col>
                      <Col>
                        <h3
                          className="h4 text-success font-weight-bold mt-sm-3"
                          style={{ textAlign: "left" }}
                        >
                          Technical Skills
                        </h3>
                        <h5
                          className="lead font-weight bold my-0"
                          style={{ textAlign: "left" }}
                        >
                          Languages
                        </h5>
                        <p
                          className="text-muted my-0"
                          style={{ textAlign: "left", fontSize: "0.9rem" }}
                        >
                          HTML, CSS, JavaScript, Python
                        </p>
                        <h5
                          className="lead font-weight bold my-0"
                          style={{ textAlign: "left" }}
                        >
                          Frameworks
                        </h5>
                        <p
                          className="text-muted my-0"
                          style={{ textAlign: "left", fontSize: "0.9rem" }}
                        >
                          Bootstrap, Reactstrap
                        </p>
                        <h5
                          className="lead font-weight bold my-0"
                          style={{ textAlign: "left" }}
                        >
                          Tools
                        </h5>
                        <p
                          className="text-muted my-0"
                          style={{ textAlign: "left", fontSize: "0.9rem" }}
                        >
                          Git, GitHub, Scikit-learn, Pandas, Numpy, Seaborn,
                          Matplotlib
                        </p>
                      </Col>
                    </Row>
                    <h3
                      className="h4 text-success font-weight-bold mt-sm-5"
                      style={{ textAlign: "left" }}
                    >
                      Experience
                    </h3>
                    <Row>
                      <Col md="8">
                        <h4
                          className="lead font-weight bold my-sm-2"
                          style={{ textAlign: "left" }}
                        >
                          Severe Chronic Neutropenia International Registry
                        </h4>
                      </Col>
                      <Col md="4">
                        <p
                          className="text-muted"
                          style={{ textAlign: "right", fontSize: "0.9rem" }}
                        >
                          Jul 2018 - Mar 2020 <br />
                          Research Assistant
                        </p>
                      </Col>
                    </Row>
                    <p style={{ textAlign: "left" }}>
                      As a research assistant for SCNIR which is affiliated with
                      the University of Washington I have collaborated with
                      cross-departmental teams in medical research projects. My
                      duties included but not limited to data analysis for
                      patients records, designing the patient website and data
                      visualization.
                    </p>
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

export default AboutMe;
