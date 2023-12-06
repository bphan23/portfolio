
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
              <img id="cb-7-forms" src={process.env.PUBLIC_URL + '/images/productivity.jpg'} alt="7 forms of respect project" />
            </div>

            <div class="div-two">
              <div class="project-item-title">
                <h3>7 Forms of Respect Tool</h3>
              </div>

              <div class="hidden-div-one">
                <img id="cb-7-forms" src={process.env.PUBLIC_URL + '/images/productivity.jpg'} alt="7 forms of respect project" />
              </div>

              <div class="project-item-description">
                <p>Collaborated in a team of 4 to refactor, automate, scale, and monetize an existing codebase</p>
                <br/>
                <p>Improved the results generation process by 98%</p>
              </div>
              <div class="project-item-navigation">
                <button><a href="https://youtu.be/TSX2fe7X_zM?t=231" target="_blank" rel="noreferrer">Demo</a></button>
                <button><a href="https://idatabased.webflow.io/" target="_blank" rel="noreferrer">More</a></button>
                <button><a href="https://ischool.uw.edu/news/2022/05/capstone-team-helps-company-save-valuable-time?utm_campaign=meetedgar&utm_medium=social&utm_source=meetedgar.com" target="_blank" rel="noreferrer">Article</a></button>
              </div>
            </div>

          </div>

          <div id="proj-item-2" class="project-item" data-aos="fade-left">
            <div class="div-one">
              <img src={process.env.PUBLIC_URL + '/images/jordan-11.jpg'} alt="out the box project"/>
            </div>
            <div class="div-two">
              <div class="project-item-title">
                <h3>Out The Box, Sneaker Service</h3>
              </div>
              <div class="hidden-div-one">
                <img src={process.env.PUBLIC_URL + '/images/jordan-11.jpg'} alt="out the box project"/>
              </div>
              <div class="project-item-description">
                <p>Collaborated within a team of two to develop a sneaker service platform where users
                  could search, filter and purchase the most sought after sneakers in today’s market</p>
                <br/>
                <p>React, JavaScript, HTML, CSS, and Stripe Payment API</p>
              </div>
              <div class="project-item-navigation">
                <button><a href="https://github.com/bphan23" target="_blank" rel="noreferrer">Website</a></button>
                <button><a href="https://github.com/bphan23" target="_blank" rel="noreferrer">GitHub</a></button>
              </div>
            </div>
          </div>

          <div id="proj-item-3" class="project-item" data-aos="fade-right">
            <div class="div-one">
              <img src={process.env.PUBLIC_URL + '/images/website.jpg'} alt="website sharer project"/>
            </div>
            <div class="div-two">
              <div class="project-item-title">
                <h3>Website Sharer</h3>
              </div>
              <div class="hidden-div-one">
                <img src={process.env.PUBLIC_URL + '/images/website.jpg'} alt="website sharer project"/>
              </div>
              <div class="project-item-description">
                <p>Implemented a server-side web application where users could log in with a Microsoft
                  Azure account and make posts. Users are able to like and comment on posts as well as
                  go on other user profiles
                </p>
                <br/>
                <p>JavaScript, HTML, CSS, Node.js, Express.js, MongoDB, and Microsoft Azure Authentication</p>
              </div>
              <div class="project-item-navigation">
                <button><a href="https://youtu.be/TSX2fe7X_zM?t=231" target="_blank" rel="noreferrer">Demo</a></button>
                <button><a href="https://github.com/bphan23" target="_blank" rel="noreferrer">GitHub</a></button>
              </div>
            </div>
          </div>

          <div id="proj-item-4" class="project-item" data-aos="fade-right">
            <div class="div-one">
              <img class="campus-paths" src={process.env.PUBLIC_URL + '/images/campus-paths.png'} alt="campus paths project"/>
            </div>
            <div class="div-two">
              <div class="project-item-title">
                <h3>Campus Paths</h3>
              </div>
              <div class="hidden-div-one">
                <img class="campus-paths" src={process.env.PUBLIC_URL + '/images/campus-paths.png'} alt="campus paths project"/>
              </div>
              <div class="project-item-description">
                <p>Implemented a full-stack application that allows users to select a starting and ending building from the University of Washington campus, which generates the shortest path between the two building
                </p>
                <br/>
                <p>Java, TypeScript, React, HTML, CSS, Spark Java</p>
              </div>
              <div class="project-item-navigation">
                <button><a href="https://github.com/bphan23" target="_blank" rel="noreferrer">Demo</a></button>
                <button><a href="https://github.com/bphan23" target="_blank" rel="noreferrer">GitHub</a></button>
              </div>
            </div>
          </div>

        </div>
    </section>
  );
}

export default Projects;