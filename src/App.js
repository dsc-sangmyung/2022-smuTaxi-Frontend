import "./App.css"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Page1, Page2, Page3, Page4, Page5} from './pages';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Page1/>}/>
          <Route path="/go" element={<Page2 title="등교"/>}/>
          <Route path="/back" element={<Page3 title="하교"/>}/>
          <Route path="/time" element={<Page4 title="시간선택"/>}/>
          <Route path="/room" element={<Page5 title="시간선택"/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
