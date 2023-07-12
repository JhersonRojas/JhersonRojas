import './App.scss'
import World from './components/World';
import { useRef } from 'react';

export default function App() {
  const scroll = useRef(0);
  const root = document.getElementById('root');
  
  function handleScroll() {    
    if (!root) return;
    const position = root.scrollTop;
    const totalHeight = root.scrollHeight - root.clientHeight;
    const percentage = Math.floor((position / totalHeight) * 100);
    scroll.current = percentage
  }

  root?.addEventListener("scroll", handleScroll)

  return (
    <>
      <div className="toolbar">
        <div className="inicio-link">
          <a href="#home">Inicio</a>
        </div>
        <div className="details-link">
          <a href="#details">Detalles</a>
        </div>
        <div className="contact-link">
          <a href="#contact">Contacto</a>
        </div>
      </div>

      <section id='home'>
        <div className="home">
          <StarsBackground stars={55} />
          <div className="astronaut">
            <World />
            <img src="/onlyAstro.png" alt="Img astronaut" loading='eager' />
          </div>
          <div className="content">
            <div className="presentatiton">
              <h1>Jherson Rojas</h1>
              <h2>FullStack developer</h2>
            </div>
          </div>
        </div>
      </section>

      <section id='details'>
        <div className="details">
          {/* <a href="https://react.dev" target="_blank">
            <img src="/react.svg" className="logo react" alt="React logo" />
          </a> */}
          <div className="info">

          </div>
        </div>
      </section>

      <section id='contact'>
        <div className="contact">
          <a href="https://react.dev" target="_blank">
            <img src="/react.svg" className="logo react" alt="React logo" />
          </a>
          <h1>Hola</h1>
        </div>
      </section>
    </>
  )
}

function StarsBackground({ stars }: { stars: number }) {

  const estrellas = [], arrayNumeros = [1, 2, 3, 4];

  const stylesStars = {
    backgroundColor: "white",
    borderRadius: "50%",
    boxShadow: "0px 0px 5px white",
  }

  for (let i = 0; i < stars; i++) {
    let indiceAleatorio = Math.floor(Math.random() * arrayNumeros.length);
    let randomWidth = arrayNumeros[indiceAleatorio];
    const x = Math.random() * (window.innerWidth * 0.9);
    const y = Math.random() * (window.innerHeight * 0.9);
    estrellas.push(
      <div key={i} className='star' style={
        {
          ...stylesStars,
          width: `${randomWidth}px`,
          height: `${randomWidth}px`,
          position: "absolute",
          left: `${x}px`,
          top: `${y}px`,
        }
      } />
    );
  }

  return estrellas
}
