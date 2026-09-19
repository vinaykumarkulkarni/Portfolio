import { ArrowUpRight, BriefcaseBusiness, Code2, Github, Linkedin, Mail, MapPin, Download, ExternalLink, Sparkles } from "lucide-react";
import { experience, portfolioProjects, profile, skills, socialLinks } from "@/data/profile";

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top">VK<span>.</span></a>
        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="navCta" href="/resume/Vinay_Kulkarni_Updated_CV_Rajeev_Format.pdf" target="_blank">
          Resume <Download size={15}/>
        </a>
      </nav>

      <section id="top" className="hero shell">
        <div className="heroCopy">
          <p className="eyebrow">LEAD SOFTWARE ENGINEER</p>
          <h1>Building scalable web experiences with <span>React, Next.js & AI.</span></h1>
          <p className="heroText">
            12 years of software development experience across enterprise web applications,
            frontend engineering, Node.js and modern application architecture — now expanding
            deeply into cloud and Generative AI.
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="#projects">Explore projects <ArrowUpRight size={17}/></a>
            <a className="secondaryButton" href="/resume/Vinay_Kulkarni_Updated_CV_Rajeev_Format.pdf" target="_blank">Download CV</a>
          </div>
          <div className="quickFacts">
            <span><MapPin size={15}/> Bengaluru, India</span>
            <span><BriefcaseBusiness size={15}/> 12 years experience</span>
          </div>
        </div>

        <div className="heroCard">
          <div className="orbit orbitOne"></div>
          <div className="orbit orbitTwo"></div>
          <div className="avatar">VK</div>
          <div className="heroCardText">
            <span>Current focus</span>
            <strong>Cloud + Generative AI</strong>
            <small>while keeping frontend engineering at the core</small>
          </div>
          <div className="floatingTag tagOne">React</div>
          <div className="floatingTag tagTwo">Next.js</div>
          <div className="floatingTag tagThree">Node.js</div>
          <div className="floatingTag tagFour">GenAI</div>
        </div>
      </section>

      <section id="about" className="section shell">
        <div className="sectionHeading">
          <p className="eyebrow">01 / ABOUT</p>
          <h2>Engineering experience with a forward-looking focus.</h2>
        </div>
        <div className="aboutGrid">
          <p className="lead">{profile.summary}</p>
          <div className="aboutCards">
            <div className="infoCard"><Code2/><strong>Frontend</strong><span>React, Next.js, TypeScript & architecture</span></div>
            <div className="infoCard"><BriefcaseBusiness/><strong>Enterprise</strong><span>Large-scale applications, delivery & collaboration</span></div>
            <div className="infoCard"><Sparkles/><strong>AI Focus</strong><span>LLMs, RAG, vector search & agents</span></div>
          </div>
        </div>
      </section>

      <section id="skills" className="section sectionTint">
        <div className="shell">
          <div className="sectionHeading">
            <p className="eyebrow">02 / TECHNICAL EXPERTISE</p>
            <h2>The tools I use — and the areas I am actively building.</h2>
          </div>
          <div className="skillGrid">
            {skills.map((group) => (
              <article className="skillCard" key={group.group}>
                <h3>{group.group}</h3>
                <div className="chips">{group.items.map(item => <span className="chip" key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
          <p className="note"><span>Note:</span> AWS and AI items marked as learning/project focus in the CV are presented here as current development areas, not as claimed years of production experience.</p>
        </div>
      </section>

      <section id="experience" className="section shell">
        <div className="sectionHeading">
          <p className="eyebrow">03 / EXPERIENCE</p>
          <h2>Professional journey</h2>
        </div>
        <div className="timeline">
          {experience.map((job) => (
            <article className="timelineItem" key={`${job.company}-${job.role}`}>
              <div className="timelineRail"><span></span></div>
              <div className="jobContent">
                <div className="jobTop">
                  <div>
                    <h3>{job.company}</h3>
                    <p>{job.role} · {job.location}</p>
                  </div>
                  <time>{job.period}</time>
                </div>
                <ul>{job.bullets.filter(Boolean).map(b => <li key={b}>{b}</li>)}</ul>
                {job.projects?.map(project => (
                  <div className="projectSubcard" key={project.name}>
                    <div className="projectSubTop">
                      <h4>{project.name}</h4><span>{project.period}</span>
                    </div>
                    <div className="chips">{project.stack.map(s => <span className="chip small" key={s}>{s}</span>)}</div>
                    <ul>{project.bullets.map(b => <li key={b}>{b}</li>)}</ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section sectionDark">
        <div className="shell">
          <div className="sectionHeading light">
            <p className="eyebrow">04 / PORTFOLIO PROJECTS</p>
            <h2>What I am building next.</h2>
            <p>These are deliberately scoped as portfolio projects so the site distinguishes planned hands-on work from professional experience.</p>
          </div>
          <div className="projectGrid">
            {portfolioProjects.map((project, i) => (
              <article className="featuredProject" key={project.title}>
                <div className="projectNumber">0{i + 1}</div>
                <span className="status">{project.status}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="chips">{project.stack.map(s => <span className="chip dark" key={s}>{s}</span>)}</div>
                <ul>{project.features.map(f => <li key={f}>{f}</li>)}</ul>
                <button className="ghostButton" type="button" disabled>GitHub repo — coming soon <ExternalLink size={14}/></button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section shell contactSection">
        <div className="contactBox">
          <div>
            <p className="eyebrow">05 / CONTACT</p>
            <h2>Let’s build something meaningful.</h2>
            <p>For engineering opportunities, technical discussions or collaboration, reach me directly.</p>
          </div>
          <div className="contactLinks">
            <a href={`mailto:${profile.email}`}><Mail size={17}/> {profile.email}</a>
            <a href={socialLinks.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footerInner">
          <span>© {new Date().getFullYear()} Vinay Kulkarni</span>
          <span>React · Next.js · Node.js · Cloud · GenAI</span>
        </div>
      </footer>
    </main>
  );
}
