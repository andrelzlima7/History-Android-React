import './Header.css'
import Navigator from './Navigator'

const Header = () => {
  return (
    <header className="header">
      <h1>CURIOSIDADES DE TECNOLOGIA</h1>
      <p>
        Tudo aqui que você sempre quis saber sobre o mundo Tech, em um único
        lugar
      </p>
      <Navigator />
    </header>
  )
}

export default Header
