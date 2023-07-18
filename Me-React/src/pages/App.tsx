import './App.scss'
import { useEffect, useRef } from 'react';
import World from './components/World/World';
import StarsBackground from './components/StarsBackground/StarsBackround';

export default function App() {

  const scroll = useRef(0);
  const nombre = useRef<HTMLDivElement | null>(null);
  const toolbar = useRef<HTMLDivElement | null>(null);
  const root = document.getElementById('root');

  useEffect(() => {
    root?.addEventListener("scroll", handleScroll)

    return () => {
      root?.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (!root) return;
    const position = root.scrollTop;
    const totalHeight = root.scrollHeight - root.clientHeight;
    const percentage = Math.floor((position / totalHeight) * 100);
    scroll.current = percentage;

    handleViewTitle(scroll.current);
  }

  const handleViewTitle = (porcentScroll: number) => {
    if (porcentScroll > 30) nombre.current?.classList.add('notView');
    else nombre.current?.classList.remove('notView');

    if (porcentScroll < 30) toolbar.current?.classList.add('notView');
    else toolbar.current?.classList.remove('notView');
  }

  return (
    <>
      <div className="toolbar notView" ref={toolbar}>
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
            <img src="/extra/onlyAstro.png" alt="Img astronaut" loading='eager' />
          </div>
          <div className="content">
            <div className="presentatiton" ref={nombre}>
              <p className="nombre" >Jherson Rojas</p>
              <p className="ambito" >FullStack developer</p>
            </div>
          </div>
        </div>
      </section>

      <section id='details'>
        <div className="details">

          <div className="skills">

            <div className="info">
              <p>
                Soy un desarrollador optimista actualmente dedicado al desarrollo web.
                Conocedor de javascript y typescript en el ambito FullStack, trabajando del
                lado del servidor y del cliente.
              </p>
            </div>

            <div className="subSkills">
              Con conocimientos de las siguientes librerias: <br />
              <a href="https://react.dev" target="_blank">
                <img src="/extra/react.svg" className="logo react" alt="React logo" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <section id='contact'>
        <div className="contact">
          <a href="https://react.dev" target="_blank">
            <img src="/extra/react.svg" className="logo react" alt="React logo" />
          </a>
          <h1>Hola</h1>
        </div>
      </section> */}
    </>
  );
};
