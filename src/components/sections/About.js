
// About Section Component
function About() {
  return (
    <section id="about" data-aos="fade-up">
      <div class="title">
          <h2>About Me</h2>
        </div>

        <div id="about-div">
          <div id="about-image">
            <img src={process.env.PUBLIC_URL + '/images/bryan-phan.jpg'} alt="Bryan Phan" class="about-item" />
          </div>
          <div id="about-description">
            <p>
              Hi! My name is Bryan Phan and I'm passoniate about designing and developing
              accessible user friendly web applications. I have experience developing
              web applications in the client-side, server-side, and full-stack.
            </p>
            <br/>
            <p>I recently graduated from the University of Washington with a degree in Informatics.</p>
            <br/>
            <p>
              Outside of programming I enjoy cooking, spending time with family, and
              playing basketball.
            </p>
          </div>
        </div>

    </section>
  );
}

export default About;