import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Home,Singin,Signup,About,Profile} from "./Pages/Auth"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<Singin />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
