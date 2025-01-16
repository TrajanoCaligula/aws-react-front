import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import SearchPage from "./pages/SearchPage";
import Login from "./pages/Sesion/Login";

function App() {
  return (
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
