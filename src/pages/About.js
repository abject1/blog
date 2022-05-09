import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";

const About = () => {
  const [isPush, editIsPush] = useState(false);
  return (
    <div className="container ">
      <Navigation />
      <Header />
      <div className="about-container">
        <h3>
          A propos
        </h3>
        <span className="underline-about"></span>
        <section className="text-a-propos">
          <p>
            Ce site web est un site fictif, fonctionnant en localhost afin d’exercer personnellement. Il a pour but de simulée des articles quand vous lancer le projet en local et vous pouvez ajouter des articles ainsi que les modifiée ou bien les supprimée.
          </p>
          <button className="next" onClick={() => editIsPush(true)}>Lire la suite</button>
          <p className={isPush ? "seen-second-text" : "second-text"}>
            Ce site web est un entrainement personnel étant entrain de me formée dans le domaine du développement web, m’exerçant en JS vanilla et étant entrain d’apprendre JSX je m’entraine désormais a injecter du JS dans mon JSX React afin de m’exercer sur JS et React en même temps.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
