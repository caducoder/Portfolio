import NavBar from "./components/NavBar"
import Banner from "./components/Banner"
import Skills from "./components/Skills"

function App() {
  // remover arquivo App.scss, caso não coloque nenhum estilo
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
    </div>
  )
}

export default App
