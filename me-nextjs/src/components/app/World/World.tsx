import "@/styles/world.css"

export default function World({ className }: { className?: string }) {
  return (
    <div className={className ?? ""}>
      <div className="planet-container">
        <div className="night"></div>
        <div className="day"></div>
        <div className="clouds"></div>
        <div className="inner-shadow"></div>
      </div>
    </div>
  )
}
