import logo from './logo.svg';
import './App.css';

// Styled Components Import
import AppNight from "./Styles/AppNight.js"
import AppDay from "./Styles/AppDay.js"

function App() {
  // Use for later peronalized implementation - const currTime = new Date().toLocaleTimeString([], {hour: "2-digit", minute:"2-digit"});
  const num = 1;
  return (
    <div className="App">
      { num === 1 ? ( <AppNight/> ) : ( <AppDay/> )}
    </div>
  );
}

export default App;
