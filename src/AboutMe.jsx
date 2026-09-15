import { useState } from 'react'
import './AboutmeCSS.css'
function AboutMe() {
const skills = {
  programming: [
    'Python',
    'JavaScript',
    'HTML',
    'CSS',
    'React',
    'Bootstrap'
  ],

  networking: [
    'Networking',
    'TCP/IP',
    'DNS',
    'icmp',
    'HTTP/HTTPS'
  ],

  systems: [
    'Linux',
    'Windows'
  ],

  tools: [
    'Nmap',
    'Wireshark',
    'Burp Suite',
    'Metasploit',
    'Git',
    'GitHub'
  ]
}
  return (
    <section className='about' id='about'>
      <h1>About Me</h1>
         <hr className='glow_linee'/>

      <div className='main_about'>
        <div className='my_story'>
          <h2>My Story</h2>
          <p>My name is <span>Hamza</span>. I was born in <span >Syria</span> and moved to Egypt because of the war before eventually being resettled in the United States.

My interest in computer science started at the age of 14 with <span> web development</span>. Over time, I became more curious about what happens behind the applications we use how networks communicate, how software works internally, and how computer systems can be analyzed and understood. This curiosity led me to explore <span>networking, Python, Wireshark, Nmap, and other technologies </span>through independent learning and hands-on projects.

<span>My goal is to study Computer Science and develop a deep understanding of software and computer systems.</span> In the future, I hope to build my own tools and pursue vulnerability research, including discovering previously unknown vulnerabilities and helping improve software security. I enjoy going beyond simply using technology I want to understand how it works and learn how to build it myself</p>
        </div>
        <div className='my_skills'>
          <h2>What i know</h2>
          <div className='skill_group'>
            <h3>Programing & Web</h3>
            <div className="skills">
              {skills.programming.map((skill,index)=>(
                <span key={index}>{skill}</span>
              ))}
            </div>
          </div>
           <div className='skill_group'>
            <h3>Networking</h3>
            <div className="skills">
              {skills.networking.map((skill,index)=>(
                <span key={index}>{skill}</span>
              ))}
            </div>
          </div>
           <div className='skill_group'>
            <h3>Systems</h3>
            <div className="skills">
              {skills.systems.map((skill,index)=>(
                <span key={index}>{skill}</span>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default AboutMe
 