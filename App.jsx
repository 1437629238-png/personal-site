import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EducationStrengths from './components/EducationStrengths';
import WorkExperience from './components/WorkExperience';
import ProjectExperience from './components/ProjectExperience';
import CampusExperience from './components/CampusExperience';
import ContactSection from './components/ContactSection';
import './index.css';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <EducationStrengths />
      <WorkExperience />
      <ProjectExperience />
      <CampusExperience />
      <ContactSection />
    </>
  );
}