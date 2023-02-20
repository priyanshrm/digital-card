import { useState } from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
