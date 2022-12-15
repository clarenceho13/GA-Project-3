import { useState } from 'react'
import './App.css'
import LoginPage from './components/LoginPage';
import Newuser from './components/newuser';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <LoginPage />

      <Routes>
      <Route path='/components/Newuser' element={<Newuser/>}> 
        </Route>
      </Routes>

      
    </div>
  )
}

export default App
