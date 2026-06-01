import { useState } from "react";

function Hero() {
  const [mensaje, setMensaje] = useState(
    "Aprendiendo React, JavaScript y componentes reutilizables."
  );

  return (
    <section className="hero" id="inicio">
      <h1>🚀 Bienvenido a mi Landing Page</h1>

      <p>{mensaje}</p>

      <button
        onClick={() =>
          setMensaje(
            "React permite crear aplicaciones modernas e interactivas."
          )
        }
      >
        Descubrir más
      </button>
    </section>
  );
}

export default Hero;