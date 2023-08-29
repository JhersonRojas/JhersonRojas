
// Paquetes de Next y React
import NextLink from "next/link"

// Componentes y estilos
import { IconGithub, IconJob, IconMail, IconPerson } from "@/components/icons/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ToggleTheme } from "@/components/global/toggle-theme";

export default function GeneralLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="main-content bg-white dark:bg-slate-950 flex">
      <div className="content-local w-full h-screen overflow-y-scroll scroll-smooth">
        {
          children
        }
      </div>
      <div className="w-min h-screen px-6 fixed right-0 hidden sm:grid">
        <nav className="text-black dark:text-white m-min h-min m-auto grid gap-3">
          <div className="w-full">
            <ToggleTheme />
          </div>
          <NextLink href="/">
            <div className={cn(buttonVariants({ variant: "outline", size: "icon" }))}>
              <IconPerson />
            </div>
          </NextLink>
          <NextLink href="#detalles">
            <div className={cn(buttonVariants({ variant: "outline", size: "icon" }))}>
              <IconJob />
            </div>
          </NextLink>
          <NextLink href="#contacto">
            <div className={cn(buttonVariants({ variant: "outline", size: "icon" }))}>
              <IconMail />
            </div>
          </NextLink>
          <a href="https://github.com/JhersonRojas" target="_blank" rel="noopener noreferrer">
            <div className={cn(buttonVariants({ variant: "outline", size: "icon" }))}>
              <IconGithub />
            </div>
          </a>
        </nav>
      </div>
    </main>
  )
}
