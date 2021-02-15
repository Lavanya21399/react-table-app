import react from 'react'
import ReactDOM from 'react-dom'
import Routing from '../ulities/Routing'
it("renders without crashing",{}=>{
  const div = document.createElement("div")
  ReactDOM.render(<Routing></Routing>,div)
  
})