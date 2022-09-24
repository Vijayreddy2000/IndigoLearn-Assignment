import SectionWhy from './components/SectionWhy'
import AboutAcca from './components/AboutAcca'
import Eligibility from './components/Eligibility'
import LearningAcca from './components/LearningAcca'
import LoginForm from './components/LoginForm'
import Navbar from './components/Navbar'

import './App.css'

const App = () => (
  <>
    <Navbar />
    <LoginForm />
    <Eligibility />
    <LearningAcca />
    <AboutAcca />
    <SectionWhy />
  </>
)
export default App
