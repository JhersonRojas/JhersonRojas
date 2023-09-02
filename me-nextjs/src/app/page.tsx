// Paquetes de Next y React
import NextImg from "next/image";

// Componentes y estilos
import World from "@/components/app/World/World";
import Navbar from "@/components/global/Navbar/Navbar";
import StarsBackground from "@/components/app/StarsBackground/StarsBackground";

export default function App() {
  return (
    <main className="main-content bg-slate-950 flex">
      <div className="w-min h-screen px-6 fixed right-0 hidden sm:grid z-50">
        <Navbar />
      </div>
      <div className="content-local w-full h-screen overflow-y-scroll scroll-smooth">
        <section id="inicio">
          <div className="w-full h-screen grid grid-cols-2 relative">
            <StarsBackground stars={50} />
            <div className="overflow-hidden grid items-end">
              {/* <NextImg
                width={1024}
                height={1024}
                quality={100}
                src="/img/astro2.png"
                alt="Astronaut image"
                className="w-[300px] h-[300px] drop-shadow-red "
              /> */}
            </div>
            <span className="text-white absolute bottom-44 left-[23rem] rotate-6">
              <NextImg
                width={1024}
                height={1024}
                quality={100}
                src="/img/astro3.png"
                alt="Astronaut image"
                className="w-[200px] h-[200px] drop-shadow-red "
              />
            </span>
            <span className="text-white absolute bottom-10 left-16">
              <h2 className="text-[8rem]">
                <span className="text-carmesi">
                  Rojas {" "}
                </span>
                Dev
              </h2>
              <h3 className="text-end">
                FullStack developer
              </h3>
            </span>
            <div className="grid items-center">
              <World
                className="ml-[15%] opacity-90"
              />
            </div>
          </div>
        </section>

        {/* <section id="detalles">
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
                  <NextImg
                    width={100}
                    height={100}
                    src="/icons/react.svg"
                    alt="React logo"
                    className="logo react"
                  />
                </a>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section id="contact">
        <div className="contact">
          <a href="https://react.dev" target="_blank">
            <img src="/extra/react.svg" className="logo react" alt="React logo" />
          </a>
          <h1>Hola</h1>
        </div>
      </section> */}
      </div>
    </main>
  );
};
