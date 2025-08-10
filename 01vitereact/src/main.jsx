import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App|chai</h1>
    </div>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  //<App />
  <MyApp/>
  //MyApp() = works but not recommend
)
