import NavBar from "./components/NavBar"
import Banner from "./components/Banner"

function App() {
  // remover arquivo App.scss, caso não coloque nenhum estilo
  return (
    <div className="App">
      <NavBar />
      <Banner />
    </div>
  )
}

export default App
