
export default function GeneralLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="main-content flex">
      <div className="content-local bg-slate-950 w-full sm:w-[90%] h-screen overflow-y-scroll">
        {
          children
        }
      </div>
      <div className="bg-slate-950 w-[10%] h-screen hidden sm:block">
        <nav className="">
          <div className="inicio-link">
            <a href="#inicio">Inicio</a>
          </div>
          <div className="details-a">
            <a href="#detalles"> Detalles </a>
          </div>
          <div className="contact-a">
            <a href="#contacto"> Contacto </a>
          </div>
        </nav>
      </div>
    </main>
  )
}
