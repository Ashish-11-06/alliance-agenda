import React from 'react';
import '../style/App.css';
// import './taskann.css';
import logo from '../Assets/images/logo.svg';
import featureIcon01 from '../Assets/images/feature-icon-01.svg';
import featureIcon02 from '../Assets/images/feature-icon-02.svg';
import featureIcon03 from '../Assets/images/feature-icon-03.svg';
import featureIcon05 from '../Assets/images/feature-icon-05.svg';
import featureIcon06 from '../Assets/images/feature-icon-06.svg';
import ScrollReveal from 'scrollreveal';
import anime from 'animejs';

class Welcome extends React.Component {
  componentDidMount() {
    ScrollReveal().reveal('.is-revealing', { delay: 500 });
    anime({
      targets: '.hero-figure-box',
      rotate: (el) => el.getAttribute('data-rotation'),
      duration: 2000,
      loop: true,
      direction: 'alternate',
    });
  }

  scrollToDiv = (divId) => {
    const element = document.getElementById(divId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  render() {
    return (
      <div className="body-wrap">
        <header className="site-header">
          <div className="container">
            <div className="site-header-inner">
              <div className="brand header-brand">
                <h1 className="m-0">
                  <a href="/">
                    <img className="header-logo-image" src={logo} alt="Logo" />
                  </a>
                </h1>
              </div>
            </div>
          </div>
        </header>
        <main>
          <section className="hero">
            <div className="container">
              <div id="heading">AllianceAgenda</div>
              <div className="hero-inner">
                <div className="hero-copy">
                  <h1 className="hero-title mt-0">Welcome, <span id="username"></span></h1>
                  <p className="hero-paragraph">AllianceAgenda me aapka swagat hai !</p>
                  <div className="hero-cta">
                    <button className="button button-primary" onClick={() => this.scrollToDiv('targetDiv')}>Services</button>
                    <button className="button">Need Help, Call - Ashish</button>
                  </div>
                </div>
                <div className="hero-figure anime-element">
                  <svg className="placeholder" width="528" height="396" viewBox="0 0 528 396">
                    <rect width="528" height="396" style={{ fill: 'transparent' }} />
                  </svg>
                  <div className="hero-figure-box hero-figure-box-01" data-rotation="45deg"></div>
                  <div className="hero-figure-box hero-figure-box-02" data-rotation="-45deg"></div>
                  <div className="hero-figure-box hero-figure-box-03" data-rotation="0deg"></div>
                  <div className="hero-figure-box hero-figure-box-04" data-rotation="-135deg"></div>
                  <div className="hero-figure-box hero-figure-box-05"></div>
                  <div className="hero-figure-box hero-figure-box-06"></div>
                  <div className="hero-figure-box hero-figure-box-07"></div>
                  <div className="hero-figure-box hero-figure-box-08" data-rotation="-22deg"></div>
                  <div className="hero-figure-box hero-figure-box-09" data-rotation="-52deg"></div>
                  <div className="hero-figure-box hero-figure-box-10" data-rotation="-50deg"></div>
                </div>
              </div>
            </div>
          </section>

          <section className="features section" id="targetDiv">
            <div className="container">
              <AnnouncementSection />
              <TaskSection />
              <div className="features-inner section-inner has-bottom-divider">
                <div className="features-wrap">
                  <Feature
                    id="Gallery"
                    icon={featureIcon01}
                    title="Photo Gallery"
                    description={`"Life is like a camera. Focus on what's important, capture the good times, 
                    and if things don't work out, take another shot."`}
                  />
                  <Feature
                    id="toggleAnnouncementSection"
                    icon={featureIcon05}
                    title="Announcements"
                    description={`"Attention everyone! We have some news so exciting, it might just make your coffee spill. Stay tuned!"`}
                    link="#announcementSection"
                  />
                  <Feature
                    id="showTaskSection"
                    icon={featureIcon02}
                    title="Tasks"
                    description={`"Behind every great achievement is a dreamer of great tasks... 
                    and a procrastinator who waited until the last minute to get started."`}
                    link="#taskSection"
                  />
                  <Feature
                    id="communication"
                    icon={featureIcon03}
                    title="Communication"
                    description={`"The problem with communication... is the illusion that it has been accomplished."`}
                  />
                  <Feature
                    id="events"
                    icon={featureIcon06}
                    title="Events"
                    description={`"Event planning is like a roller coaster with no seat belts."`}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="pricing section">
            <div className="container-sm">
              <div className="pricing-inner section-inner">
                <div className="pricing-header text-center">
                  <h2 className="section-title mt-0">🤗ⓗⓐⓥⓔ- ⓐ- ⓝⓘⓒⓔ-•ᴗ•ⓓⓐⓨ❣︎°❀⋆.ೃ࿔*:･</h2>
                  <p className="section-paragraph mb-0">
                    "May your day be filled with sunshine, smiles, and positive vibes. Have a wonderful day!"
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="cta section">
            <div className="container">
              <div className="cta-inner section-inner">
                <h6 className="section-title mt-0">Ashish Bhosale - (Founder of AllianceAgenda)</h6>
                <div className="cta-cta">
                  <button className="button button-primary button-wide-mobile">Get in touch</button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    );
  }
}

const Feature = ({ id, icon, title, description, link }) => (
  <div className="feature text-center is-revealing" id={id}>
    <div className="feature-inner">
      <div className="feature-icon">
        <img src={icon} alt={title} />
      </div>
      <a href={link} style={{ textDecoration: 'none' }}>
        <h4 className="feature-title mt-24">{title}</h4>
      </a>
      <p className="text-sm mb-0">{description}</p>
    </div>
  </div>
);

const AnnouncementSection = () => (
  <section id="announcementSection" style={{ display: 'none' }}>
    <div id="announcements" className="announcement-class"></div>
    <form id="addAnnouncementForm">
      <h2>Add Announcement</h2>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" name="title" required />
      <label htmlFor="content">Content:</label>
      <input id="content" name="content" rows="4" required />
      <input type="hidden" id="createdBy" name="createdBy" value="" />
      <button type="submit" id="announcement-button">Add Announcement</button>
    </form>
  </section>
);

const TaskSection = () => (
  <section id="taskSection" style={{ display: 'none' }}>
    <h1>Tasks</h1>
    <div id="taskList" className="task-class"></div>
    <form id="taskForm">
      <h2>Add Tasks</h2>
      <input type="text" id="Ttitle" placeholder="Task Title" required />
      <input id="description" placeholder="Task Description" required />
      <input type="date" id="dueDate" required />
      <select id="priority" required>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <select id="assigned_to" required>
        <option value="" disabled selected>Select User</option>
      </select>
      <input type="hidden" id="assigned_by" required />
      <button type="submit">Add Task</button>
    </form>
  </section>
);

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="site-footer-inner">
        <ul className="footer-social-links list-reset">
          <li>
            <a href="https://github.com/AshishBhosale">
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <title>GitHub</title>
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z" fill="#FFF" />
              </svg>
            </a>
          </li>
        </ul>
        <div className="footer-copyright">&copy; 2024 Ashish Bhosale, all rights reserved</div>
      </div>
    </div>
  </footer>
);

export default Welcome;
