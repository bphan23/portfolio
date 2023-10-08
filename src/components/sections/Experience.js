
// Experience Section Component
function Experience() {
  return (
    <section id="experience" data-aos="fade-up">

      <div class="title">
        <h2>Experience</h2>
      </div>

      <div id="main-experience-container">

        <div id="skill-container">
          <h3>Some technologies I worked with:</h3>
          <div id="grid-container">

            <div class="grid-item">
              <a href="http://www.java.com" target="_blank" rel="noreferrer">
                <img class="skill-item" src={process.env.PUBLIC_URL + '/images/java-icon.svg'} alt="java logo"/>
              </a>
              <p>Java</p>
            </div>

            <div class="grid-item">
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
                <img class="skill-item" src={process.env.PUBLIC_URL + '/images/js.png'} alt="javascript logo"/>
              </a>
              <p>JavaScript</p>
            </div>

            <div class="grid-item">
              <a href="https://developer.mozilla.org/en-US/docs/Web/html" target="_blank" rel="noreferrer">
                <img class="skill-item" src={process.env.PUBLIC_URL + '/images/html.png'} alt="html logo"/>
              </a>
              <p>HTML</p>
            </div>

            <div class="grid-item">
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer">
                <img class="skill-item" src={process.env.PUBLIC_URL + '/images/css.png'} alt="css logo"/>
              </a>
              <p>CSS</p>
            </div>

            <div class="grid-item">
              <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                <img class="skill-item" src={process.env.PUBLIC_URL + '/images/git-icon.svg'} alt="git logo"/>
              </a>
              <p>Git</p>
            </div>

            <div class="grid-item">
              <a href="https://react.dev/" target="_blank" rel="noreferrer">
                <img class="skill-item" src={process.env.PUBLIC_URL + '/images/reactjs-icon.svg'} alt="react logo"/>
              </a>
              <p>React</p>
            </div>

            <div class="grid-item">
              <a href="https://nodejs.org/en" target="_blank" rel="noreferrer">
                <img class="skill-item" src={process.env.PUBLIC_URL + '/images/nodejs-icon.svg'} alt="node js logo"/>
              </a>
              <p>NodeJS</p>
            </div>

            <div class="grid-item">
              <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
                <img id="express-logo" class="skill-item" src={process.env.PUBLIC_URL + '/images/express.png'} alt="express js logo"/>
              </a>
              <p>Express</p>
            </div>

            <div class="grid-item">
              <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
                <img class="skill-item" src={process.env.PUBLIC_URL + '/images/mongodb-icon.svg'} alt="mongodb logo"/>
              </a>
              <p>MongoDB</p>
            </div>

            <div class="grid-item">
              <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
                <img class="skill-item" src={process.env.PUBLIC_URL + '/images/ts-icon.svg'} alt="typescript logo"/>
              </a>
              <p>TypeScript</p>
            </div>

            <div class="grid-item">
              <a href="https://en.wikipedia.org/wiki/SQL" target="_blank" rel="noreferrer">
                <img class="skill-item" src={process.env.PUBLIC_URL + '/images/sql.png'} alt="sql logo"/>
                </a>
                <p>SQL</p>
            </div>

            <div class="grid-item">
              <a href="https://www.python.org/" target="_blank" rel="noreferrer">
                <img class="skill-item" src={process.env.PUBLIC_URL + '/images/python-icon.svg'} alt="python logo"/>
              </a>
              <p>Python</p>
            </div>

          </div>
        </div>

        <div id="work-experience-container">
          <h3>Where I've worked:</h3>
          <img id="info-picture" src={process.env.PUBLIC_URL + '/images/ischool-logo.png'} alt="UW Information School logo"/>
          <img id="cb-picture" src={process.env.PUBLIC_URL + '/images/cb-logo.png'} alt="CuriosityBased logo"/>
        </div>
      </div>
    </section>
  );
}

export default Experience;