import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './Layouts/Default';
import About from './pages/About';
import Contact from './pages/Contact';
import Credits from './pages/Credits';
import Work from './pages/Work';
import Project from './pages/Work/Project';

function App() {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="projects" element={<Project />} />
        <Route path="work" element={<Work />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="credits" element={<Credits />} />
        <Route path="/" element={<About />} />
        <Route
          path="*"
          element={
            <div style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </div>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
