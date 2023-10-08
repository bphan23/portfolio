
// Projects Section Component
function Projects() {
  return (
    <section id="projects">
        <div class="title">
          <h2>Projects</h2>
        </div>

        <div id="project-container" data-aos="fade-up">
          <div id="proj-item-1" class="project-item" data-aos="fade-right">
            <div class="div-one">
              <img id="cb-7-forms" src={process.env.PUBLIC_URL + '/images/productivity.jpg'} alt="7 forms of respect logo" />
            </div>
            <div class="div-two">
              <h3>7 Forms of Respect Tool</h3>
              <p>
                Collaborated in a team of 4 to refactor, automate, scale, and monetize an existing
                codebase for our sponsor CuriosityBased
              </p>

              <p>
                My role was to refactor the existing codebase and automate the results generation
                process
              </p>
              <p>
                Me and my team had an article written about us, which was spotlighted on the
                University of Washington, Information School website.
                Follow this <a id="capstone-spotlight" href="https://ischool.uw.edu/news/2022/05/capstone-team-helps-company-save-valuable-time?utm_campaign=meetedgar&utm_medium=social&utm_source=meetedgar.com" target="_blank" rel="noreferrer">link</a>
                to check it out!
              </p>

              <button><a href="https://youtu.be/TSX2fe7X_zM?t=231" target="_blank" rel="noreferrer">Demo</a></button>
              <button><a href="https://idatabased.webflow.io/" target="_blank" rel="noreferrer">More</a></button>

            </div>
          </div>

          <div id="proj-item-2" class="project-item" data-aos="fade-left">
            <div class="div-two">
              <h3>Out The Box, Sneaker Service</h3>

              <p>
                Collaborated within a team of two to conceptualize and create a cutting-edge sneaker
                platform, empowering users to effortlessly explore, search, and refine their choices
                among the latest coveted footwear, ultimately facilitating seamless purchases.
              </p>

              <p>React, JavaScript, HTML, CSS,  and Stripe Payment API</p>
              <button><a href="https://youtu.be/TSX2fe7X_zM?t=231" target="_blank" rel="noreferrer">Demo</a></button>
              <button><a href="https://idatabased.webflow.io/" target="_blank" rel="noreferrer">More</a></button>

            </div>
            <div class="div-one">
              <img src={process.env.PUBLIC_URL + '/images/jordan-11.jpg'} alt="project 2"/>
            </div>
          </div>

          <div id="proj-item-3" class="project-item" data-aos="fade-right">
            <div class="div-one">
              <img src={process.env.PUBLIC_URL + '/images/website.jpg'} alt="project 3"/>
            </div>
            <div class="div-two">
              <h3>Website Sharer</h3>
              <p>
                Implemented a server-side web application where users could log in with a Microsoft
                Azure account and make posts. Users are able to like and comment on posts as well as
                go on other user profiles.
              </p>

              <p>JavaScript, HTML, CSS, Node.js, Express.js, MongoDB, and Microsoft Azure Authentication</p>
              <button><a href="https://youtu.be/TSX2fe7X_zM?t=231" target="_blank" rel="noreferrer">Demo</a></button>
              <button><a href="https://idatabased.webflow.io/" target="_blank" rel="noreferrer">More</a></button>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Projects;