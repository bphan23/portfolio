
// Resume Section Component
function Resume() {
  return (
    <section id="resume">
      <div id="resume-title" class="title" data-aos="fade-up">
        <h2>Check Out My Resume!</h2>
        <button id="resume-btn">
          <a href={process.env.PUBLIC_URL + '/bryan-phan-resume.pdf'} target="_blank" rel="noreferrer">Grab A Copy</a>
        </button>
      </div>
      <div id="resume-image"></div>
    </section>
  );
}

export default Resume;