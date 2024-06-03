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
            <img
              id="cb-7-forms"
              src={process.env.PUBLIC_URL + "/images/productivity.jpg"}
              alt="7 forms of respect project"
            />
          </div>

          <div class="div-two">
            <div class="project-item-title">
              <h3>7 Forms of Respect Tool</h3>
            </div>

            <div class="hidden-div-one">
              <img
                id="cb-7-forms"
                src={process.env.PUBLIC_URL + "/images/productivity.jpg"}
                alt="7 forms of respect project"
              />
            </div>

            <div class="project-item-description">
              <p>
                Executed refactoring, automating, and scaling of the company’s 7
                Forms of Respect tool
              </p>
              <p>
                This resulted in a 98.33% acceleration of the generation process
                (from 10 minutes down to 10 seconds)
              </p>
              <p>Integrated Stripe to enable monetization</p>
            </div>
            <div class="project-item-navigation">
              <button>
                <a
                  href="https://youtu.be/TSX2fe7X_zM?t=231"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </button>
              <button>
                <a
                  href="https://idatabased.webflow.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  More
                </a>
              </button>
              <button>
                <a
                  href="https://ischool.uw.edu/news/2022/05/capstone-team-helps-company-save-valuable-time?utm_campaign=meetedgar&utm_medium=social&utm_source=meetedgar.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Article
                </a>
              </button>
            </div>
          </div>
        </div>

        <div id="proj-item-2" class="project-item" data-aos="fade-left">
          <div class="div-one">
            <img
              src={process.env.PUBLIC_URL + "/images/jordan-11.jpg"}
              alt="out the box project"
            />
          </div>
          <div class="div-two">
            <div class="project-item-title">
              <h3>Out The Box</h3>
            </div>
            <div class="hidden-div-one">
              <img
                src={process.env.PUBLIC_URL + "/images/jordan-11.jpg"}
                alt="out the box project"
              />
            </div>
            <div class="project-item-description">
              <p>
                Develop a sneaker e-commerce platform enabling users to create
                accounts, update user information, seamlessly search, filter,
                and purchase the most coveted sneakers in today’s market
              </p>
              <p>
                This platform was crafted using React.js, JavaScript, HTML/CSS
                for an intuitive and responsive user interface
              </p>
              <p>
                Integrated with Supabase for efficient database management and
                secure user authentication
              </p>
              <p>Utilized Stripe for secure payments</p>
            </div>
            <div class="project-item-navigation">
              <button>
                <a
                  href="https://otb-sneakers.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/bphan23/otb-sneakers"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </button>
            </div>
          </div>
        </div>

        <div id="proj-item-3" class="project-item" data-aos="fade-right">
          <div class="div-one">
            <img
              class="campus-paths"
              src={process.env.PUBLIC_URL + "/images/campus-paths.png"}
              alt="campus paths project"
            />
          </div>
          <div class="div-two">
            <div class="project-item-title">
              <h3>Campus Paths</h3>
            </div>
            <div class="hidden-div-one">
              <img
                class="campus-paths"
                src={process.env.PUBLIC_URL + "/images/campus-paths.png"}
                alt="campus paths project"
              />
            </div>
            <div class="project-item-description">
              <p>
                Implemented a full-stack application enabling users to select
                starting and ending building within the University of Washington
                campus, generating the shortest path between the two buildings
              </p>
              <p>
                Built application using React.js, TypeScript, and HTML/CSS for
                the front-end
              </p>
              <p>
                Utilized Java and Spark Java for the back-end database
                operations
              </p>
            </div>
            <div class="project-item-navigation"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
