// Importación de librerias de terceros
import { useEffect, useRef } from 'react';

// Importación de componentes
import World from './../components/World/World';
import StarsBackground from './../components/StarsBackground/StarsBackround';

export default function Home() {

  const scroll = useRef(0);
  
  const root = document.getElementById('root');
  const nombre_div = useRef<HTMLDivElement | null>(null);
  const toolbar_div = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    root?.addEventListener("scroll", handleScroll)

    return () => {
      root?.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (!root) return;
    console.log(root.scrollHeight);
    
    const position = root.scrollTop;
    const totalHeight = root.scrollHeight - root.clientHeight;
    const percentage = Math.floor((position / totalHeight) * 100);
    scroll.current = percentage;
    handleViewTitle(scroll.current);
  }

  const handleViewTitle = (porcentScroll: number) => {
  
    if (porcentScroll > 30) nombre_div.current?.classList.add('notView');
    else nombre_div.current?.classList.remove('notView');

    if (porcentScroll < 80) toolbar_div.current?.classList.add('notView');
    else toolbar_div.current?.classList.remove('notView');

  }

  return (
    <>
      <div className="toolbar notView" ref={toolbar_div}>
        <div className="inicio-link">
          <a href="#inicio">Inicio</a>
        </div>
        <div className="details-a">
          <a href="#detalles"> Detalles </a>
        </div>
        <div className="contact-a">
          <a href="#contacto"> Contacto </a>
        </div>
      </div>

      <section id="inicio">
        <div className="inicio">
          <StarsBackground stars={55} />
          <div className="astronaut">
            <World />
            <img src="/extra/onlyAstro.png" alt="Img astronaut" loading='eager' />
          </div>
          <div className="content">
            <div className="presentatiton" ref={nombre_div}>
              <p className="nombre" >Jherson Rojas</p>
              <p className="ambito" >FullStack developer</p>
            </div>
          </div>
        </div>
      </section>

      <section id="detalles">
        <div className="detalles">

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
