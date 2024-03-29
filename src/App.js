import "./App.css"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Page0, Page1, Page2, Page3, Page4, Page5,Page6,Page7} from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Page0/>}/>
          <Route path="/go_back" element={<Page1/>}/>
          <Route path="/go" element={<Page2 title="등교"/>}/>
          <Route path="/back" element={<Page3 title="하교"/>}/>
          <Route path="/time" element={<Page4 title="시간선택"/>}/>
          <Route path="/room" element={<Page5 title="시간선택"/>}/>
          <Route path="/inside" element={<Page6/>}/>
          <Route path="/information" element={<Page7 title="정보 입력"/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
