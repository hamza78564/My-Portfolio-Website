import { useState, useEffect, useRef } from 'react'
import './herocss.css'

function CyberWord({ word, mouse }) {
  const wordRef = useRef(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!wordRef.current) return

    const rect = wordRef.current.getBoundingClientRect()

    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const dx = centerX - mouse.x
    const dy = centerY - mouse.y

    const distance = Math.sqrt(dx * dx + dy * dy)

    const dangerZone = 120

    if (distance < dangerZone && distance > 0) {
      const force = (dangerZone - distance) / dangerZone

      setOffset({
        x: (dx / distance) * force * 50,
        y: (dy / distance) * force * 50
      })
    } else {
      setOffset({
        x: 0,
        y: 0
      })
    }
  }, [mouse])

  return (
    <span
      ref={wordRef}
      className="cyber_word"
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`
      }}
    >
      {word}
    </span>
  )
}

function Hero() {
  const text = 'Welcome to my portfolio'

  const [displayText, setDisplayText] = useState('')

  const [mouse, setMouse] = useState({
    x: -1000,
    y: -1000
  })

  const cyberWords = [
    'root',
    'sudo',
    'TCP',
    'UDP',
    '443',
    '22',
    'SSH',
    'NMAP',
    '0xFF',
    '0x00',
    '>_',
    '{ }',
    'Linux',
    'Python',
    'DNS',
    'HTTP',
    'HTTPS',
    'SIEM',
    'SOC',
    'Wireshark',
    'Burp',
    'Firewall',
    'Exploit',
    'Hash',
    'Packet',
    'Kernel',
    'Shell',
    'localhost',
    '127.0.0.1',
    
  ]

  useEffect(() => {
    let index = 0

    const typing = setInterval(() => {
      setDisplayText(text.slice(0, index + 1))
      index++

      if (index === text.length) {
        clearInterval(typing)
      }
    }, 150)

    return () => clearInterval(typing)
  }, [])

  const handleMouseMove = (e) => {
    setMouse({
      x: e.clientX,
      y: e.clientY
    })
  }

  const handleMouseLeave = () => {
    setMouse({
      x: -1000,
      y: -1000
    })
  }

  return (
    <section
    id='home'
      className="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="cyber_background">
        {cyberWords.map((word, index) => (
          <CyberWord
            key={index}
            word={word}
            mouse={mouse}
          />
        ))}
      </div>

      <div className="main_hero">
        <div className="me">

          <div className="animation">
            <h1>
              {displayText}
              <span className="typing_cursor">|</span>
            </h1>
          </div>

          <div className="hero_name">
            <h2>
              Hi Im <span>Hamzaツ</span>
            </h2>

<h3 className="hero_role">
  Computer Science Student & Developer
</h3>
            <p>
              I'm passionate about computer science and cybersecurity,
              <br />
              and I'm always striving to improve and become the best.
              <span className="firstSent">
                {' '}One piece of advice?
              </span>
              <span className="secondSent">
                {' '}Don't miss out on me
              </span>
            </p>
          </div>

          <div className="buttons">
            <a href='#projects'>My Projects</a>
          </div>

        </div>

        <div className="video">

          <div className="terminal">

            <div className="terminal_top">
              <span className="red"></span>
              <span className="yellow"></span>
              <span className="green"></span>

              <p>hamza@security:~</p>
            </div>

            <div className="terminal_body">

              <p>
                <span className="terminal_user">
                  hamza@security
                </span>

                <span>:~$ whoami</span>
              </p>

              <p className="terminal_output">
                Hamza
              </p>

              <p>
                <span className="terminal_user">
                  hamza@security
                </span>

                <span>:~$ skills</span>
              </p>

              <p className="terminal_output">
                Python | Linux | Networking | Cybersecurity
              </p>

              <p>
                <span className="terminal_user">
                  hamza@security
                </span>

                <span>:~$ Is football called soccer? </span>
              </p>

              <p className="terminal_output">
                Fah no sir 🥀
              </p>

              <p>
                <span className="terminal_user">
                  hamza@security
                </span>

                <span>:~$ </span>

                <span className="cursor">
                  █
                </span>
              </p>

            </div>

          </div>

        </div>

      </div>
      <div className="status_bar">

  <div className="status_item online">
    <span className="status_dot"></span>
    <p>SYSTEM ONLINE</p>
  </div>

  <div className="status_item">
    <span>01</span>
    <p>CS STUDENT</p>
  </div>

  <div className="status_item">
    <span>02</span>
    <p>BUILDING & LEARNING</p>
  </div>

  <div className="status_item">
    <span>03</span>
    <p>CLEVELAND, OH</p>
  </div>

</div>
    </section>
  )
}

export default Hero