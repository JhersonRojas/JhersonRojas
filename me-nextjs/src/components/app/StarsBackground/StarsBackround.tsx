"use client"

import { useEffect, useRef, useState } from "react";

export default function StarsBackground({ stars, children }: { stars: number, children?: React.ReactNode }) {

  const container = useRef<HTMLDivElement>(null)
  const [contenedor, setContenedor] = useState<{ alto: number, ancho: number }>({ alto: 0, ancho: 0 })

  const estrellas = [], sizeStars = [1, 2, 3, 4];

  const stylesStars = {
    boxShadow: "0px 0px 5px white",
  }

  useEffect(() => {
    setContenedor({
      alto: container.current?.offsetHeight ?? 0,
      ancho: container.current?.offsetWidth ?? 0,
    })

    return () => {
      console.log(contenedor)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  for (let index = 0; index < stars; index++) {
    let randomIndex = Math.floor(Math.random() * sizeStars.length);
    let randomWidth = sizeStars[randomIndex];
    const x = Math.random() * (contenedor.ancho * 0.9);
    const y = Math.random() * (contenedor.alto * 0.9);
    estrellas.push(
      <span
        key={index}
        className="bg-white rounded-full transition-all"
        style={
          {
            ...stylesStars,
            width: `${randomWidth}px`,
            height: `${randomWidth}px`,
            position: "absolute",
            left: `0px`,
            top: `0px`,
            opacity: (contenedor.alto && contenedor.ancho ? 1 : 0),
            transform: `translate(${x}px, ${y}px)`
          }
        }
      />
    );
  };

  return (
    <div
      ref={container}
      className="w-full h-full"
    >
      {
        estrellas
      }
      {
        children
      }
    </div>
  );
}
