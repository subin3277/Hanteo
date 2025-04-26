import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import { Nav } from './components';

function App() {
  return (
    <div className="App">
      <Nav/>
      
      <Router>
        <Routes>
          <Route exact path="/" element={<Main/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
