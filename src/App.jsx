import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Menu from './Menu'
import Runny from './Runny'
import Soft from './Soft'
import Hard from './Hard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/runny" element={<Runny />} />
        <Route path="/soft" element={<Soft />} />
        <Route path="/hard" element={<Hard />} />
      </Routes>
    </Router>
  )
}

export default App