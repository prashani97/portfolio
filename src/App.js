import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import Administration from './pages/Administration';
import Supervision from './pages/Supervision';
import Research from './pages/Research';
import Publication from './pages/Publication';
import Affliations from './pages/Affliations';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/administration' element={<Administration/>}/>
            <Route path='/supervision' element={<Supervision/>}/>
            <Route path='/research' element={<Research/>}/>
            <Route path='/publications' element={<Publication/>}/>
            <Route path='/affliations' element={<Affliations/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<>not found</>}/>
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
