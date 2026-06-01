import { useState } from "react";

function Hero() {
  const [mensaje, setMensaje] = useState(
    "Este es un inicio de aprendizaje nuevo"
  );

  return (
    <section className="hero" id="inicio">
      <h1>Bienvenido a mi landing page</h1>

      <p>{mensaje}</p>

      <button onClick={() => setMensaje("Gracias por visitar mi página")}>
        Conocer más
      </button>
    </section>
  );
}

export default Hero;