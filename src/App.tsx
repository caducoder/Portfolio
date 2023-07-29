import NavBar from "./components/NavBar"
import Banner from "./components/Banner"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
  // remover arquivo App.scss, caso não coloque nenhum estilo
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
