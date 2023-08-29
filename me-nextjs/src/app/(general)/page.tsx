// Paquetes de Next y React
import NextLink from "next/link"
import NextImg from "next/image"

// Componentes y estilos
import World from "@/components/app/World/World";

export default function Home() {
  return (
    <>
      <section id="inicio">
        <div className="">
          {/* presentación */}
          <div className="w-full h-[50hw] grid">
            <span className="text-white m-auto">
              <h2 className="text-[8rem]">
                Jherson Rojas
              </h2>
              <h3 className="ambito">
                FullStack developer
              </h3>
            </span>
          </div>
          <div className="w-full h-[50vw]">
            <div className="relative w-full">
              {/* planeta girador */}
              <World
                className="absolute left-[30vw]"
              />
              {/* imagen de anstronauta */}
              <div className="w-fit absolute left-[30vw] z-10">
                <NextImg
                  width={336}
                  height={600}
                  src="/img/onlyAstro.png"
                  alt="Astronaut image"
                  className="w-1/2"
                />
              </div>
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
      </section>

      {/* <section id="contact">
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
