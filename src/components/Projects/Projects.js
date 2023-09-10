import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weatherApp from "../../Assets/Projects/weather App.png";
import toDOList from "../../Assets/Projects/todo list.png";
import stackOverFlow from "../../Assets/Projects/stack overflow.png";
import keeperApp from "../../Assets/Projects/Keeper App.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stackOverFlow}
              isBlog={false}
              title="Stack OverFlow Clone"
              description="Stack Overflow Clone (MERN) project is a replica of a famous Q/A website for developers as the name suggests, and it's made on a completely different stack with the necessary functionalities.                             "
              ghLink="https://github.com/JayeshSabale/stack-overflow-clone"
              demoLink="https://stack-overflow-clone-jayeshsabale.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keeperApp}
              isBlog={false}
              title="The Keeper App"
              description="This is Keeper  which is a clone of Google Keep so that whenever you have any new ideas then you can simply take a note and add it to your own Keeper app.
              This application is build with react.js
              "
              ghLink="https://github.com/JayeshSabale/TheKeeperApp"
              demoLink="https://the-keeper-app.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={toDOList}
              isBlog={false}
              title="To Do List"
              description="Created using EJS and MongoDB.
It will show you the current date and month at the top and you get to check off your to do list items. And you also get to add new items which will get added to your To Do list.And also you can delete items as that tasks get completed."
              ghLink="https://github.com/JayeshSabale/To-Do-List"
              demoLink="https://to-do-list-jayeshsabale.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherApp}
              isBlog={false}
              title="The Weather App"
              description="The weather app created using frontend technologies html, css, javascript and Bootstrap and server side technologies like Node.js and Express.js
So in this project we are able to display the temperature of a particular location that they're interested
in, and also display a weather symbol for the weather conditions there."
              ghLink="https://github.com/JayeshSabale/TheWeatherApp"
              demoLink="https://weather-app-xtm6.onrender.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
