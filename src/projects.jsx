import './ProjectCss.css'
import firstwebsite from './assets/firstwebsite.png'
import secondwebsite from './assets/SecondWebsite.png'
import thirdwebsite from './assets/ThirdWebsite.png'

function Projects() {

  const websites = [
    {
      title: "ACHIEVING GROWTH WEBSITE",
      description: "My first website after learning React",
      image: firstwebsite,
      link:"https://github.com/hamza78564/corporate-growth-site"
    },
    {
      title: "Sport Watch Website",
      description: "My second website better than the first ",
      image: secondwebsite,
      link:"https://github.com/hamza78564/Smart_Watch"
    },
    {
      title: "Makeup Website",
      description: "My third and best website",
      image: thirdwebsite,
      link:"https://github.com/hamza78564/Cosmetics"
    }
  ]
 const tools = [
  {
    title: "Brute Force Attack Simulation",
    description:
      "A Python tool that simulates brute-force login attemptss in a controlled environment to demonstrate how password attacks work.",
      link:"https://github.com/hamza78564/bruteforce_attack_similation"
  },

  {
    title: "ARP Network Traffic Filter",
    description:
      "A network security tool that monitors and filters ARP traffic to identify and handle suspicious packets on the network.",
      link:"https://github.com/hamza78564/ARP-Based-Network-Traffic-Filter-Educational-Project-"
  },

  {
    title: "ARP Firewall",
    description:
      "A Python-based firewall designed to inspect ARP traffic and help detect and block suspicious ARP activity.",
      link:"https://github.com/hamza78564/ARP_FIREWALL"
  },

  {
    title: "Firewall",
    description:
      "A Python firewall project that analyzes network traffic and applies filtering rules to allow or block connections.",
      link:"https://github.com/hamza78564/Firewall"
  }
]
  return (
    <section id='projects' className="projects">
   <h1>My Projects</h1>
   <hr className='glow_linee'/>
      <div className="main_projects">

     

        <div className="project_group">

          <h2>Websites</h2>

          <div className="projects_grid">

            {websites.map((project, index) => (
              <div className="project_box" key={index}>

                <img
                  src={project.image}
                  alt={project.title}
                />

                <h2>{project.title}</h2>

                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer">View Project <span className='arrow'>↗</span></a>

              </div>
            ))}

          </div>

        </div>

        <div className="project_group">

          <h2>Python Tools</h2>

          <div className="projects_grid">
            {tools.map((project, index) => (
              <div className="project_box" key={index}>
                <h2>{project.title}</h2>

                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer">View Project <span className='arrow'>↗</span></a>


              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}

export default Projects