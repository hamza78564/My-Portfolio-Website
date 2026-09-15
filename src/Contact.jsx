import { useState } from 'react'
import './ContactCss.css'
function Contact() {


  return (
    <section className='contact' id='contact'>
      <h1>Contact</h1>
         <hr className='glow_linee'/>
      <div className='main_contact'>

          <div className='contact_intro'>
            <h3>Interested in connecting?</h3>
            <p>I'm always open to discussing computer
   science, projects, and opportunities</p>
          </div>
          <div className='links'>
            <h3>Let's Connect</h3>
            <div className='email'>
              <span>Email</span>
              <span>hamzatalep49@gmail.com</span>
            </div>
            <div className='github'>
                <span>GitHub</span>
                <a target="_blank" rel="noreferrer" href='https://github.com/hamza78564'>View Profile <span className="arrow">↗</span></a>
            </div>
            <div className='send_messg'>
              <a target="_blank" rel="noreferrer"
  className="send_message"
  href="mailto:hamzatalep49@gmail.com"
>
  Send a Message <span>↗</span>
</a>
            </div>
          </div>
          <div className='available'>
            <span className="status_dot"></span>
            <p>Available To Connect</p>
          </div>
          <div className='copyright'>
            <span>© 2026 Hamzaツ</span>
            <span className="built">
              &lt;/&gt; BUILT BY HAMZA
            </span>
          </div>
        </div>
    </section>
    
  )
}

export default Contact
 