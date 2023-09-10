import './App.css';
import Profile from './components/profile/Profile';

function App() {
  const social = [
    {
      name: "Github",
      src: process.env.PUBLIC_URL + `/assets/icon/social/github.svg`,
      href: "https://github.com/iamalbinnj"
    },
    {
      name: "Twitter",
      src: process.env.PUBLIC_URL + `/assets/icon/social/twitter.svg`,
      href: "https://twitter.com/_iamalbinnj_"
    },
    {
      name: "Linkedin",
      src: process.env.PUBLIC_URL + `/assets/icon/social/linkedin.svg`,
      href: "https://www.linkedin.com/in/albinnj"
    },
    {
      name: "Mail",
      src: process.env.PUBLIC_URL + `/assets/icon/social/mail.svg`,
      href: "mailto:iamalbinnj@gmail.com"
    },
  ]
  return (
    <>
      {/* Section-1 */}
      <header id="app-page">
        <section className='header-container'>
          <img className='profile-image' src={process.env.PUBLIC_URL + `/assets/profile-image.jpg`} alt='Profile of Albin N J' />
          <h1>Albin N J</h1>
          <div className='content-text'>
            <p>
              Software Engineer
            </p>
            <div id='social' className='social-icon'>
              {social.map((social, index) => {
                return (
                  <a href={social.href} target="_blank" rel="noreferrer" key={index}>
                    <img src={social.src} alt={social.name} />
                  </a>
                );
              })}
            </div>
          </div>
          <i className='fas fa-chevron-down'></i>
        </section>
      </header>
      <Profile />
    </>
  );
}

export default App;