import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <section className="cards" id="info">
        <Card
          titulo="HTML"
          descripcion="Define la estructura y el contenido de una página web."
        />

        <Card
          titulo="CSS"
          descripcion="Permite diseñar y dar estilo a los elementos visuales."
        />

        <Card
          titulo="JavaScript"
          descripcion="Añade interactividad y comportamiento dinámico."
        />
      </section>

      <Footer />
    </>
  )
}

export default App