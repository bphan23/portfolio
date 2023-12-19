
// Home Section Component
function Home() {
  return (
    <section id="home">
      <div id="intro-div">
        <h1>Hi! <span class="wave">👋</span> I'm Bryan Phan</h1>
        <p id="animated-text"></p>
      </div>
      <div id="theme-btn">
        <img id="theme-image" src={process.env.PUBLIC_URL + '/images/moon.png'} alt="moon"/>
      </div>
    </section>
  );
}

export default Home;
