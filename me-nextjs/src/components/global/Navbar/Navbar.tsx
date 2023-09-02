// Paquetes de Next y React
import NextLink from "next/link";

// Componentes y estilos
import { IconGithub, IconJob, IconMail, IconPerson } from "@/components/global/icons/icons";
import { ToggleTheme } from "@/components/global/toggle-theme";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <nav className="text-black dark:text-white m-min h-min m-auto grid gap-3">
      <div className="w-full">
        <ToggleTheme className={cn("dark:bg-slate-950")} />
      </div>
      <NextLink href="/">
        <div className={cn("dark:bg-slate-950", buttonVariants({ variant: "outline", size: "icon" }))}>
          <IconPerson />
        </div>
      </NextLink>
      <NextLink href="#detalles">
        <div className={cn("dark:bg-slate-950", buttonVariants({ variant: "outline", size: "icon" }))}>
          <IconJob />
        </div>
      </NextLink>
      <NextLink href="#contacto">
        <div className={cn("dark:bg-slate-950", buttonVariants({ variant: "outline", size: "icon" }))}>
          <IconMail />
        </div>
      </NextLink>
      <a href="https://github.com/JhersonRojas" target="_blank" rel="noopener noreferrer">
        <div className={cn("dark:bg-slate-950", buttonVariants({ variant: "outline", size: "icon" }))}>
          <IconGithub />
        </div>
      </a>
    </nav>
  )
}
