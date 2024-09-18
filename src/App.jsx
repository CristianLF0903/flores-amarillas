import { BubblyButton } from "./BubblyButton.jsx";
import { ParticlesBackground } from "./ParticlesBackground.jsx";
import "./App.css";

export function App() {
  return (
    <>
      <ParticlesBackground />
      <div className="container">
        <h1 data-text="mi amor">mi amor</h1>
        <p>Tengo un regalito para tí!!</p>
        <BubblyButton href="/flowers">¡Descubre tu sorpresa!</BubblyButton>
      </div>
    </>
  );
}

export default App;
