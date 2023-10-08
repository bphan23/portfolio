
// Thanks Section Component
function Thanks() {
  return (
    <section id="thanks-content-section">
      <div id="thanks-content-title" data-aos="fade-down">
          <h3>Thank You For Visiting My Website!</h3>
          <p>I developed this website from scratch using these technologies:</p>
        </div>

        <div id="thanks-grid-container" data-aos="fade-down">
          <div class="grid-item">
            <a href="https://react.dev/" target="_blank" rel="noreferrer">
              <img class="skill-item" src={process.env.PUBLIC_URL + '/images/reactjs-icon.svg'} alt="react logo"/>
            </a>
            <p>React</p>
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
        </div>
    </section>
  );
}

export default Thanks;