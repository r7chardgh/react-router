import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-page-container">
      <img
        src="https://picsum.photos/600/200"
        alt="about hero image"
        className="about-hero-image"
      />
      <div className="about-page-content">
        <h1>Don't squeeze om a sedan when you could relax in a van</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          officiis, enim maxime, in ab quasi tempore repudiandae cum ut dolore
          ad excepturi. Autem aliquid explicabo repellat culpa quidem atque
          fugit eaque laborum! Corporis, error explicabo qui quam quia expedita
          sapiente, fuga obcaecati nisi ea suscipit eum delectus ducimus
          blanditiis! Aperiam corporis facere maxime laborum sequi quia suscipit
          necessitatibus eveniet quo sunt eum animi consectetur aliquid,
          deleniti.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quidem
          consectetur rem ea ratione temporibus explicabo.
        </p>
      </div>
      <div className="about-page-cta">
        <h2>
          Your destination is waiting.
          <br />
          Your van is ready!
        </h2>
        <Link className="link-button" to="/vans">
          Explore our vans
        </Link>
      </div>
    </div>
  );
}

export default About;
