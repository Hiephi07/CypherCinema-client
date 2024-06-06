import './App.scss'
import Test from './pages/Test'
import './assets/fonts/fonts.scss'
import Movie_is_showing from './pages/client/Movie_is_show/Movie_is_showing'
import Phimsapchieu from './pages/client/Sort movies/Sort_movies'
import Banner from './pages/client/Banner/Banner'
import Promotion from './pages/client/Promotion/Promotion'

import Event from './pages/client/Event/Event'

function App() {

  return (
    <>
    <Movie_is_showing/>
    <Phimsapchieu/>
   <Banner/>
   <Promotion/>
    <Event/>
    </>
  )
}

export default App

