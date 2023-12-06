(function() {

  window.addEventListener('load', init);

  /**
   * Initializes the interativity, so it's ready to call the defined anonymous
   * functions inside
   */
  function init() {
    qs('body').classList.add('light-theme');
    id('experience').classList.add('light-gray');
    id('contact').classList.add('light-gray');
    id('thanks-content-section').classList.add('light-gray');
    // when change button is clicked - toggles between row style and column style
    id('theme-image').addEventListener('click', changeTheme);
  }

  // ----------------------------------------------------------

  function changeTheme() {
    let body = qs('body');
    let themeImage = id('theme-image');
    // if light theme switch to dark theme
    if(body.classList.contains('light-theme')) {
      body.classList.replace('light-theme', 'dark-theme');
      id('experience').classList.replace('light-gray', 'dark-gray');
      id('contact').classList.replace('light-gray', 'dark-gray');
      id('thanks-content-section').classList.replace('light-gray', 'dark-gray');
      themeImage.src = './portfolio/images/sun.png'; // change image
      themeImage.alt = 'sun';
    } else {
      // otherwise dark
      body.classList.replace('dark-theme', 'light-theme');
      id('experience').classList.replace('dark-gray', 'light-gray');
      id('contact').classList.replace('dark-gray', 'light-gray');
      id('thanks-content-section').classList.replace('dark-gray', 'light-gray');
      themeImage.src = './portfolio/images/moon.png'; // change image
      themeImage.alt = 'moon';
    }
  }

  // ----------------------------------------------------------

  /**
   * Finds the element with the specified ID attribute
   *
   * @param {string} id element ID
   * @returns {HTMLElement} DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Finds the element with the specified selector tag attribute
   *
   * @param {string} selector element tag attribute
   * @returns {HTMLElement} DOM object assocaited with selector
   */
  function qs(selector) {
    return document.querySelector(selector);
  }
})();
