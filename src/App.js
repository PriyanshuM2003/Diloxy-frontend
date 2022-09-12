import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import Chatbox from './components/Chatbox';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Chatbox />
        </Router>
      </div>
    </>
  );
}

export default App;
