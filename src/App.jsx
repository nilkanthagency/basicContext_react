
import './App.css'
import Login from './Login/Login'
import User from './User/User'
import ContextUserProvider from './ContextUser/ContextUserProvider'


function App() {

  return (
    <>

      <ContextUserProvider>
        <User></User>
        <Login></Login>
      </ContextUserProvider>


    </>
  )
}

export default App
