import React from "react";
import Header from "../Components/Header";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <a href="#about"><div className="down-arrow">&#x2193;</div></a>
      <div id="about" className="about-cv">
        <div>
          <img src="./assets/img/about.png" alt="a propos" />
        </div>
        <div>
          <h2>
            A propos de <span className="green">moi</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            excepturi ut doloribus! Accusantium voluptates consectetur porro
            totam nemo earum. Id sint cumque error laboriosam similique odio
            exercitationem, sit magni quis?
          </p>
        </div>
      </div>
      <div className="project-cv">
          <h2>Mes projets <span>récent</span></h2>
          <div className="filter-project">
              <div>Mes projets</div>
              <div>React JS</div>
              <div>Symfony</div>
              <div>Node JS</div>
          </div>
          <div className="project">
              <div><img src="./assets/img/deve.png" alt="projet"/></div>
              <div><img src="./assets/img/deve.png" alt="projet"/></div>
              <div><img src="./assets/img/deve.png" alt="projet"/></div>
          </div>
      </div>
      <div className="footer-cv">
          ©Copyright by Dwayne Jhonson
      </div>
    </div>
  );
};

export default Home;
