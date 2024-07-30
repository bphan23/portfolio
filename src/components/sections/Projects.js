// Projects Section Component
function Projects() {
  return (
    <section id="projects">
      <div class="title">
        <h2>Projects</h2>
      </div>

      <div id="proj-item-1" class="project-item" data-aos="fade-left">
        <div class="div-one">
          <img
            src={process.env.PUBLIC_URL + "/images/jordan-11.jpg"}
            alt="out the box project"
          />
        </div>
        <div class="div-two">
          <div class="project-item-title">
            <h3>Out The Box Sneakers</h3>
          </div>
          <div class="hidden-div-one">
            <img
              src={process.env.PUBLIC_URL + "/images/jordan-11.jpg"}
              alt="out the box project"
            />
          </div>
          <div class="project-item-description">
            <p>
              Engineered a high-performance e-commerce platform for sneakers,
              facilitating user account creation, profile management, and
              advanced search and filtering capabilities for sneaker purchases.
            </p>
            <p>
              Leveraged React.js, JavaScript, HTML5, and Tailwind CSS to develop
              a responsive and intuitive front-end interface.
            </p>
            <p>
              Employed Supabase for scalable database management and robust user
              authentication, ensuring data integrity and security.
            </p>
            <p>
              Integrated Stripe API for secure and efficient payment processing,
              optimizing the checkout workflow and enhancing user experience.
            </p>
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

      <div id="project-container" data-aos="fade-up">
        <div id="proj-item-2" class="project-item" data-aos="fade-right">
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
                Architected, designed, implemented, tested, and delivered highly
                scalable products.
              </p>
              <p>
                Refactored, automated, and scaled the 7 Forms of Respect tool,
                achieving a 98.33% reduction in generation time
              </p>
              <p>
                Integrated Stripe for seamless monetization, enhancing the
                tool's commercial capabilities.
              </p>
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
                Implemented a full-stack application to compute the shortest
                path between buildings on the University of Washington campus.
              </p>
              <p>
                Engineered the front-end using React.js, TypeScript, and
                HTML5/CSS to deliver a highly interactive and dynamic user
                interface with real-time updates.
              </p>
              <p>
                Employed Java and Spark Java for the back-end, leveraging
                efficient data processing and database interactions to optimize
                pathfinding algorithms and route computations.
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
