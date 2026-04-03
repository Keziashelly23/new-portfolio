import { portfolioData } from './portfolioData';

function App() {
  const {
    name,
    title,
    location,
    tagline,
    intro,
    email,
    resumeLink,
    socialLinks = [],
    whatImBuilding = [],
    about = [],
    skills = [],
    projects = [],
    experience = [],
  } = portfolioData;

  return (
    <div className="site-shell">
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />

      <header className="topbar">
        <div>
          <p className="eyebrow"></p>
          <h1 className="brand">{name}</h1>
        </div>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">{location}</p>
            <h2>{title}</h2>
            <p className="lead">{tagline}</p>
            <p className="supporting">{intro}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                View Projects
              </a>
              <a className="button button-secondary" href={resumeLink}>
                Resume
              </a>
            </div>
          </div>

          {whatImBuilding.length > 0 && (
            <aside className="hero-card">
              <p className="card-label">What I'm Building</p>
              <div className="snapshot-grid">
                {whatImBuilding.map((item) => (
                  <div className="snapshot-item" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </aside>
          )}
        </section>

        <section className="section split-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h3>A flexible intro section you can personalize fast.</h3>
          </div>

          <div className="panel">
            {about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {skills.length > 0 && (
              <div className="skills-row">
                {skills.map((skill) => (
                  <span className="pill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-heading">
            <p className="eyebrow">Selected Work</p>
            <h3>Show your strongest projects with short, specific descriptions.</h3>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <p className="project-category">{project.category}</p>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                {project.impact && <p className="impact">{project.impact}</p>}
                {Array.isArray(project.tech) && project.tech.length > 0 && (
                  <div className="tag-row">
                    {project.tech.map((item) => (
                      <span className="pill subtle" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                )}
                <a className="text-link" href={project.link}>
                  View project
                </a>
              </article>
            ))}
          </div>
        </section>

        {experience.length > 0 && (
          <section className="section split-section" id="experience">
            <div className="section-heading">
              <p className="eyebrow">Experience</p>
              <h3>Add jobs, freelance work, internships, or major milestones.</h3>
            </div>

            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item" key={`${item.role}-${item.company}`}>
                  <div className="timeline-meta">
                    <h4>{item.role}</h4>
                    <span>{item.period}</span>
                  </div>
                  <p className="company">{item.company}</p>
                  <p>{item.summary}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="section contact-panel" id="contact">
          <p className="eyebrow">Contact</p>
          <h3>Invite people to reach out with a clear next step.</h3>
          <p>
            Replace this with your preferred call to action. You can invite
            freelance inquiries, full-time opportunities, collaborations, or
            anything else.
          </p>

          <div className="contact-actions">
            <a className="button button-primary" href={`mailto:${email}`}>
              {email}
            </a>
            {socialLinks.length > 0 && (
              <div className="social-row">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
