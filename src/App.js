import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <div className="Resume">
        <div className="Header">
          <Header />
        </div>
        <div className="Content">
          <div className="Contact">
            <Contact />
            <Education />
            <Skills />
          </div>
          <div className="MainContent">
          <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}


function Header() {
  return (
    <div>
      <h1>Shawn Ashlee Guarin</h1>
      <h2>Customer Service Representative</h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h3>Contact</h3>
      <div className="ContactItem">
        <FontAwesomeIcon icon={faEnvelope} />
        <p>
          <strong>Email:</strong> shawnashlee.services@gmail.com
        </p>
      </div>
      <div className="ContactItem">
        <FontAwesomeIcon icon={faPhone} />
        <p>
          <strong>Phone:</strong> +639612778898
        </p>
      </div>
      <div className="ContactItem">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <p>
          <strong>Location:</strong> Pampanga, Philippines
        </p>
      </div>
      <div className="ContactItem">
        <FontAwesomeIcon icon={faLinkedin} />
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a target='_blank' href="https://www.linkedin.com/in/shawn-ashlee-guarin-7b9307250/">linkedin.com/in/shawnguarin</a>
        </p>
      </div>
      <div className="ContactItem">
        <FontAwesomeIcon icon={faGithub} />
        <p>
          <strong>GitHub:</strong>{' '}
          <a target='_blank' href="https://github.com/shawnyy18">github.com/shawnyy18</a>
        </p>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div> 
      <h3>Work Experience</h3>
      <div>
        <h4>Customer Service Representative</h4>
        <p>SM Pampanga | 2022 - 2022</p>
        <ul>
          <li><strong>Assisted customers</strong> with product inquiries and provided exceptional service.</li>
          <li><strong>Handled customer transactions</strong>, ensuring accurate bagging and efficient service.</li>
          <li><strong><u>Maintained cleanliness</u></strong> and organization of work areas to enhance customer experience.</li>
        </ul>
      </div>
      <div>
        <h4>Food Service Crew</h4>
        <p>KFC | 2023 - 2023</p>
        <ul>
          <li><strong>Prepared food and beverages</strong> in compliance with company standards and safety regulations.</li>
          <li><u><strong>Provided prompt service</strong></u> to customers during peak hours, maintaining high satisfaction levels.</li>
          <li>Worked collaboratively with team members to <strong>meet daily operational goals</strong>.</li>
        </ul>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div className="Education">
      <h3>Education</h3>
      <p>Bachelor of Science in Information Technology</p>
      <p>University of the Assumption, 2021 - 2026</p>
    </div>
  );
}

function Skills() {
  return (
    <div className="Skills">
      <h3>Skills</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Git</li>
        <li>Python</li>
        <li>C++</li>
      </ul>
    </div>
  );
}


export default App;
