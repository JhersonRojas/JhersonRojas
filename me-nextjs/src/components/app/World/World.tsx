import { cn } from "@/lib/utils"
import "@/styles/world.css"

export default function World({ className }: { className?: string }) {
  return (
    <div className={cn(className, "")}>
      <div className="planet-container w-[25rem] 2xl:w-[35rem] h-[25rem] 2xl:h-[35rem]">
        <div className="night w-[25rem] 2xl:w-[35rem] h-[25rem] 2xl:h-[35rem]"></div>
        <div className="day w-[25rem] 2xl:w-[35rem] h-[25rem] 2xl:h-[35rem]"></div>
        <div className="clouds w-[25rem] 2xl:w-[35rem] h-[25rem] 2xl:h-[35rem]"></div>
        <div className="inner-shadow w-[25rem] 2xl:w-[35rem] h-[25rem] 2xl:h-[35rem]"></div>
      </div>
    </div>
  )
}
