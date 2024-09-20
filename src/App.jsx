import { BubblyButton } from "./BubblyButton.jsx";
import { ParticlesBackground } from "./ParticlesBackground.jsx";
import { Flowers } from "./Flowers.jsx";
import "./App.css";
import { useContext } from "react";
import { FlowersContext } from "./context/FlowersContext.jsx";

function Home() {
  return (
    <>
      <ParticlesBackground />
      <div className="container">
        <h1 data-text="mi amor">mi amor</h1>
        <p>Tengo un regalito para tí!!</p>
        <BubblyButton>¡Descubre tu sorpresa!</BubblyButton>
      </div>
    </>
  );
}

export function App() {
  const { flowers } = useContext(FlowersContext);

  return <>{!flowers ? <Home /> : <Flowers />}</>;
}

export default App;
