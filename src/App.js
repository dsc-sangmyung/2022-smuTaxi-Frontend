
import "./App.css"

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Page1, Page2 } from './pages';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Page1/>}/>
          <Route path="/go" element={<Page2 title="등교"/>}/>
          <Route path="/back" element={<Page2 title="하교"/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
