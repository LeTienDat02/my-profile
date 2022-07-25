import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import Resum from './pages/Resume';
import Contact from './pages/Contact'
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout><Home /></Layout>}/>
          <Route path='/about' element={<Layout><About /></Layout>}/>
          <Route path='/resume' element={<Layout><Resum /></Layout>}/>
          <Route path='/contact' element={<Layout><Contact /></Layout>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
