import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className='container'> 
          <img className='Img' src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
        <br /> <br /> <br /> <br /> <br /> <br /> 
    <br />
      <div className='Texto'>
      "Welcome to my portfolio. My name is David Antonio Yepes Castellanos, and I am currently 20 years old. It's been about two years since I shifted my focus to the world of technology, and I wanted to delve deeper into the creation and management of websites. Within my studies, I have concentrated more on frontend development and some aspects of databases.
      I am very passionate about this profession and strive to continue growing within the industry."
      </div>
      <br /> 
      <br />
      <h5 className='Proj'>PROJECTS</h5>

      <div className="projects-container">
  <div className="projects-grid">
    <div className="project-card">
      <img src="https://cdn.discordapp.com/attachments/1069604840734457901/1108738116832997397/blueasy.png" alt="Proyecto 1" />

    </div>
    <div className="project-card">
      <img src="https://cdn.discordapp.com/attachments/1069604840734457901/1085953513948975174/Apptastico.png" alt="Proyecto 2" />

    </div>
    <div className="project-card">
      <img src="https://cdn.discordapp.com/attachments/1069604840734457901/1077249845921849424/Plantilla_Bleux.png" alt="Proyecto 3" />
    </div>
  </div>
</div>
      
    </div>
  );
}
