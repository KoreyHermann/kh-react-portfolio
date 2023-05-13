import React from "react";
import profileImage from "../../assets/large/Profile/metf.jpg";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
          <div class="intro-img">
            <img src={profileImage} style={{ width: "50%" }} alt="profile" />
          </div>
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          
          <p>
          My name is Korey Hermann, a prospective software engineer with a certificate from the University of Minnesota Coding Boot Camp and a Bachelor's Degree in Business Marketing from the University of North Carolina at Charlotte.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
