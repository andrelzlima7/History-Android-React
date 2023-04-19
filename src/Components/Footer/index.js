import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className="footer">
      <a href="">
        <FontAwesomeIcon icon={faLink} /> Alura
      </a>
      <a href="">
        <FontAwesomeIcon icon={faLink} /> CursoEmVideo
      </a>
      <a href="">
        <FontAwesomeIcon icon={faLink} /> GitHub
      </a>
      <a href="">
        <FontAwesomeIcon icon={faLink} /> Linkedin
      </a>
    </footer>
  )
}

export default Footer
