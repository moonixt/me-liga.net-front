
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './pages/Homepage'
import Header from './components/Header'


function App() {

  return (
      <div>
        
      <Router>
        <Header/>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
          
      </Router>
        
      
      </div>
     

  )
}

export default App
