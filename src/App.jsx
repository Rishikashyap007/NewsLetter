
import './App.css'
import Gridsection from './Components/Grid-section/Grid-section'
import Navbar from './Components/Header/Navbar'
import Grid from './Components/upper-Grid/U-Grid'
import Footer from './Components/Footer/Footer'
import Footer_newsletter from './Components/Footer/Footer_newsletter'

function App() {

  return (
    <>
        <Navbar/>
        <Grid/>
        <Gridsection />
        <Footer_newsletter />
        {/* <Footer /> */}
    </>
  )
}

export default App
