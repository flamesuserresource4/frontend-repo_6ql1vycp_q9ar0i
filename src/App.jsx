import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import System from './pages/System'
import UseCases from './pages/UseCases'
import About from './pages/About'
import Contact from './pages/Contact'
import Legal from './pages/Legal'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/system" element={<System />} />
      <Route path="/use-cases" element={<UseCases />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/legal" element={<Legal />} />
    </Routes>
  )
}

export default App
