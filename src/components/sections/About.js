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
            src={process.env.PUBLIC_URL + "/images/bp_uw.jpg"}
            alt="Bryan Phan"
            class="about-item"
          />
        </div>
        <div id="about-description">
          <p>
            Hi! My name is Bryan Phan, and I graduated from the University of
            Washington with a Bachelor's degree in Informatics.
          </p>

          <p>
            I’m currently pursuing a Master’s in Computer Science at Georgia
            Tech, specializing in Computer Systems, to strengthen my foundation
            in CS and explore topics like Artificial Intelligence, Machine
            Learning, and Cloud Computing.
          </p>
          <p>
            When I’m not coding, you’ll find me on the basketball court,
            experimenting in the kitchen, or enjoying quality time with family
            and friends.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
