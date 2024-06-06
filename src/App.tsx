import './App.scss'
import './assets/fonts/fonts.scss'
import Header from './components/client/header/Header'
import Movie_is_showing from './pages/client/Movie_is_show/Movie_is_showing'


function App() {

  return (
    <>
      <Header />
      {/* <Test></Test> */}
      <Movie_is_showing />

    </>
  )
}

export default App

