import { useEffect } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import { Header } from "./components/Header/Header";
import useTelegram from "./components/hooks/useTelegram";

function App() {
  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="App">
      <Header />
      <h2>Hello</h2>
      <p>
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat.{" "}
      </p>
      <Button onClick={onToggleButton}>Toggle</Button>
    </div>
  );
}

export default App;
