import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import MyNavBar from "components/Navbars/MyNavBar";
import Footer from "components/Footers/Footer";
class Hero extends React.Component {
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
                    <h1 className="text-success display-1 my-3">
                      Yongjoo Ellis Yoo
                    </h1>
                    <div className="btn-wrapper my-3">
                      <img
                        alt="..."
                        style={{ width: "200px", borderRadius: "100%" }}
                        src={require("assets/img/profile_pic.jpg")}
                      />
                    </div>
                    <h2 className="heading-title text-warning my-2">
                      Full Stack Developer |<br />
                      Data Analyst
                    </h2>
                    <p className="lead " style={{ textAlign: "left" }}>
                      I am a developer and data analyst based in Seattle,
                      Washington. Witnessing how data and technology can improve
                      and empower humanity has drawn me into the coding. I
                      strongly believe we can fix problems we face one line of
                      code at a time.
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

export default Hero;
