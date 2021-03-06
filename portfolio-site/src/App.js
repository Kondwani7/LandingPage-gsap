import './App.scss';
import {Route, Routes} from 'react-router-dom'
import './components/Layout'
import Layout from './components/Layout';
import Home from './components/Home'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import About from './components/About'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
