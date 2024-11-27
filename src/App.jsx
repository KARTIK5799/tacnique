import HomePage from './pages/HomePage';
import { UserProvider } from './context/UserContext';

import './App.css'

function App() {


  return (
   <>
       <UserProvider>
            <HomePage />
        </UserProvider>
   </>
  )
}

export default App
