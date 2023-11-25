import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>

    </>
  )
}

export default App
