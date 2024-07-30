import Home from "../sections/Home";
import "./NavBar.css";

function Navbar() {
  return (
    <header>
      <nav>
        <ul class="nav-bar">
          <li class="logo">
            <a href="#">Bryan Phan</a>
          </li>
          <input type="checkbox" id="check" />

          <span class="menu">
            <li>
              <a class="active" href="#home">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <label for="check" class="close-menu">
              <i class="fas fa-times"></i>
            </label>
          </span>
          <label for="check" class="open-menu">
            <i class="fas fa-bars"></i>
          </label>
        </ul>
      </nav>
      <Home />
    </header>
  );
}

export default Navbar;
