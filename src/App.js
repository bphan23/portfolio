import './App.css';
import NavBar from './components/navigation/NavBar';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Resume from './components/sections/Resume';
import Thanks from './components/sections/Thanks';
import Footer from './components/utils/Footer';
import { useEffect } from 'react';

function App() {
  // Need to useEffect hook
  useEffect(() => {
    let pageSections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('span.menu li a');

    // activate link when scrolling
    window.onscroll = () => {

      if(pageSections !== null)
      pageSections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let sectionId = section.getAttribute('id');
        if(top >= offset && top < offset + height) {

          if(navLinks !== null)
          navLinks.forEach(link => {
            link.classList.remove('active'); // remove
            document.querySelector('span.menu li a[href*=' + sectionId + ']').classList.add('active'); // add
          });
        }
      });
    }
  })

  return (
    <div>
      <NavBar/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Resume/>
      <Thanks/>
      <Footer/>
    </div>
  );
}

export default App;
