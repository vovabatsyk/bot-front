import { useEffect } from "react";
import "./App.css";
const tg = window.Telegram.WebApp;
function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <div className="App">
      <h2>Hello</h2>
      <p>
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat.{" "}
      </p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
