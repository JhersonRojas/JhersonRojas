export default function StarsBackground({ stars }: { stars: number }) {

  const estrellas = [], arrayNumeros = [1, 2, 3, 4];

  const stylesStars = {
    backgroundColor: "white",
    borderRadius: "50%",
    boxShadow: "0px 0px 5px white",
  }

  for (let i = 0; i < stars; i++) {
    let indiceAleatorio = Math.floor(Math.random() * arrayNumeros.length);
    let randomWidth = arrayNumeros[indiceAleatorio];
    const x = Math.random() * (window.innerWidth * 0.9);
    const y = Math.random() * (window.innerHeight * 0.9);
    estrellas.push(
      <div key={i} className='star' style={
        {
          ...stylesStars,
          width: `${randomWidth}px`,
          height: `${randomWidth}px`,
          position: "absolute",
          left: `${x}px`,
          top: `${y}px`,
        }
      } />
    );
  };

  return estrellas;
}
