import { useState,useRef } from 'react'
import './header.css'
import './mainn.css'
import { FiMenu, FiX } from "react-icons/fi";
import music from './assets/music.mp3'
function Header() {
const [menuOpen,setMenuOpen] = useState(false)
const [isPlaying,setIsPlaying] = useState(false)
const audioRef=useRef(null)
const toggleMusic = () => {
  if (isPlaying) {
    audioRef.current.pause()
  } else {
    audioRef.current.play()
  }

  setIsPlaying(!isPlaying)
}
  return (
    <header className='header'>
      <div className='main_header'>
        <div className='logo'>
          <div className='name'>Hamzaツ</div>
        </div>
        <button className='menu_button' onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <FiX/> : <FiMenu/>}</button>
        <nav className={`navbar ${menuOpen ? 'open' :''}`}>
        
            <ul>
              <li><a href="#home">Home</a></li>
<li><a href="#projects">Projects</a></li>
<li><a href="#about">About Me</a></li>
<li><a href="#contact">Contact</a></li>
            </ul>
            <audio ref={audioRef} src={music} loop/>
            <button
               className={`music_toggle ${isPlaying ? 'playing' : ''}`}
          onClick={toggleMusic}>
            <span className="music_icon">
              {isPlaying ? '▮▮' : '▶'}
            </span>

            <span className="music_text">
              {isPlaying ? 'AUDIO ON' : 'PLAY AUDIO'}
            </span>
            </button>
          </nav>
        
      </div>
      <hr className='glow_line'/>
    </header>
  )
}

export default Header
 