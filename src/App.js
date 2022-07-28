import "./App.css"

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
<<<<<<< Updated upstream
import { Page1, Page2, Page3, Page4} from './pages';
=======
import { Page1, Page2, Page3, Page4, Page5,Page6} from './pages';
>>>>>>> Stashed changes



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Page1/>}/>
          <Route path="/go" element={<Page2 title="등교"/>}/>
          <Route path="/back" element={<Page3 title="하교"/>}/>
          <Route path="/time" element={<Page4 title="시간선택"/>}/>
<<<<<<< Updated upstream
=======
          <Route path="/room" element={<Page5 title="시간선택"/>}/>
          <Route path="/inside" element={<Page6/>}/>
          
>>>>>>> Stashed changes
        </Routes>
      </Router>
    </div>
  );
}

export default App;
