import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Resume from './components/Resume';
import CareerResearch from './components/CareerResearch';
import EducationExperience from './components/EducationExperience';
import SkillsAwards from './components/SkillsAwards';
import Sources from './components/Sources';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Resume />
      <CareerResearch />
      <EducationExperience />
      <SkillsAwards />
      <Sources />
      <Footer />
    </div>
  );
}

export default App;
