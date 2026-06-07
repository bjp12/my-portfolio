import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Aboutme from './components/Aboutme'
import Icons from './components/Icons'
import './App.css'

function App() {

  return (
      <div className='layout'> 
        <aside className='sidebar'>
          <Hero />
          <Navbar/>
          <Icons />
        </aside>
        <main className='main-content'>
          <Aboutme />
          <Projects />
          <Experience />
        </main>
      </div>
  )
}


export default App
