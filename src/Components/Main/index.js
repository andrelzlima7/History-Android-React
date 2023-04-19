import './Main.css'
import Article from './Article'
import Video from './Video'
import Extra from './Extra'

const Main = () => {
  return (
    <main className="main">
      <h2>História do mascote do android</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum nihil
        quam debitis quia atque fuga corporis magnam. Voluptates soluta dolores
        nulla ipsam aperiam vel autem sequi mollitia aut atque. Ea
      </p>

      <Article />
      <Video />
      <Extra />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque ad ut
        corrupti ratione reprehenderit eaque laborum, aliquid sit hic odio,
        explicabo consequatur iusto voluptates dolorem maiores facilis id
        distinctio assumenda.
      </p>
    </main>
  )
}

export default Main
