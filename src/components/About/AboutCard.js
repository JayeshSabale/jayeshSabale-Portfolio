import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Jayesh Eknath Sabale </span>
            from <span className="purple"> Thane,Maharashtra India.</span>
            <br /> I have completed my degree in{" "}
            <span className="purple"> computer engineering </span> from Dy
            Patil's{" "}
            <span className="purple">
              {" "}
              ramrao adik institute of technology{" "}
            </span>{" "}
            with
            <span className="purple"> 7.5 CGPA. </span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football and Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Cycling
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">JayeshSabale</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
