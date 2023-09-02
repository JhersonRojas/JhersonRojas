"use client"

import { useEffect, useState } from "react";

export default function StarsBackground({ stars }: { stars: number }) {

  const [ventana, setVentana] = useState<Window>();

  const estrellas = [], sizeStars = [1, 2, 3, 4];

  const stylesStars = {
    boxShadow: "0px 0px 5px white",
  }

  useEffect(() => {
    // Verificar si estamos en el lado del cliente antes de acceder a window
    if (typeof window !== 'undefined') {
      // Obtener la altura de la ventana y actualizar el estado
      const updateWindowHeight = () => {
        setVentana(window);
      };

      // Agregar un evento de escucha para cambiar la altura cuando la ventana se redimensiona
      window.addEventListener('resize', updateWindowHeight);

      // Obtener la altura de la ventana inicial
      updateWindowHeight();

      // Limpieza del evento de escucha cuando el componente se desmonta
      return () => {
        window.removeEventListener('resize', updateWindowHeight);
      };
    }
  }, [])

  for (let index = 0; index < stars; index++) {
    if (!ventana) return;
    let randomIndex = Math.floor(Math.random() * sizeStars.length);
    let randomWidth = sizeStars[randomIndex];
    const x = Math.random() * (ventana?.innerWidth * 0.9);
    const y = Math.random() * (ventana?.innerHeight * 0.9);

    estrellas.push(
      <span
        key={index}
        className="transition-all bg-white rounded-full absolute"
        style={
          {
            ...stylesStars,
            width: `${randomWidth}px`,
            height: `${randomWidth}px`,
            left: `${x}px`,
            top: `${y}px`,
            animation: "loadStars 1s"
          }
        }
      />
    );
  };

  return estrellas
}
