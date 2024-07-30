// About Section Component
function About() {
  return (
    <section id="about" data-aos="fade-up">
      <div class="title">
        <h2>About Me</h2>
      </div>

      <div id="about-div">
        <div id="about-image">
          <img
            src={process.env.PUBLIC_URL + "/images/bryan-phan.jpg"}
            alt="Bryan Phan"
            class="about-item"
          />
        </div>
        <div id="about-description">
          <p>
            Hello! I'm a recent graduate from the University of Washington with
            a Bachelor of Science degree in Informatics. I've been leveraging my
            skills to become a software engineer.
          </p>

          <p>
            Recently, I've focused on developing web applications and expanding
            my web development knowledge through various online courses and
            personal projects.
          </p>
          <p>
            When away from my computer, I love playing basketball, cooking, and
            spending time with family & friends.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
