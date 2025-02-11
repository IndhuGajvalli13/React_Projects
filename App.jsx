// import React from 'react'
// import Nav from './Components/Nav'
// import './App.css'

// const App = () => {
//   return (
//     <div>
//       <Nav></Nav>
//      <div>
//       <h4 id="t1">T H E</h4>
//       <img src="data:image/png;base64,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"></img>
//        <h1 id="t2">  LONG WHEELBASE</h1>
//       <h3>Introductory price of $72,90,000</h3>
//      </div>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Home from './Components1/Home'
// const App = () => {
//   return (
//     <div>
//       <Home></Home>
//     </div>
//   )
// }

// export default App


// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()
//      this.state={
//       count:0
//      }
//   }
//   handleChange=()=>{
//     this.setState({count:this.state.count+1})
  
// if(this.state.count<=1||this.state.count==5){
// document.body.style.backgroundColor="blue"
// }else{
//   document.body.style.backgroundColor="aqua"
// }
//   }
//   handleDecrement=()=>{
//     this.setState({count:this.state.count-1})
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleChange}>Increment</button>
//         <button onClick={this.handleDecrement}>Decrement</button>
//       </div>
//     )
//   }
// }


// =============numbers with buttons==================

// import React, { useState } from 'react'

// const App = () => {
//   let [count , setCount]=useState(0)
   
//   let change=()=>{
//     setCount(count+1)
//   }
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={change}>Click</button>
//     </div>
//   )
// }

// export default App


// ===============colors with numbers===========

// import React, { useState } from 'react'

// const App = () => {

//   let[state,setState]=useState("chinnu");


//   let handleChange=()=>{

//       setState("honey")
//   }
  

//   return (
//     <div>
//       <h1>{state}</h1>
//       <button onClick={handleChange}>Click</button>
//     </div>
//   )

// }
// export default App



// import React, { useState } from 'react'
// import Video from "./Video.json"
// import VideoContainer from './YouTube/VideoContainer'

// const App = () => {
//   let[state,setState]=useState(Video)

//   let[Play,setPlay]=useState(state[0])
  
// let runvideo=(max)=>{

//   setPlay(max.videoUrl)
// }
  

//   return (
//     <div>
// <VideoContainer state={state}Play={Play} runvideo={runvideo}></VideoContainer>

//     </div>
//   )
// }

// export default App

// import React, { useRef, useState } from 'react'

// const App = () => {
//   let [state,setState]=useState(true)

//   let vidRef=useRef()

//   let playpause=()=>{
//     setState(!state)
//   }
//   return (
//     <div>
//       <button onClick={playpause} controls ></button>
//     </div>
//   )
// }

// export default App

// import React, { useRef, useState } from 'react'
// import Images from "./Images"

// let [state,setState]=useState(true)

// let imgRef=useRef()

// if(state==true){
//   imgRef.current.display()

// }




// const App = () => {
//   return (
//     <div>
      
//       <button onClick={imgRef}>Image1</button>
//       <button onClick={imgRef}>Image2</button>
//       <button onClick={imgRef}>Image3</button>
//       <button onClick={imgRef}>Image4</button>

//     </div>
//   )
// }

// export default App



// import React from 'react'
// import Hoc1 from './HOC/Hoc1'

// const App = () => {
//   return (
//     <div>
   
//    <Hoc1></Hoc1>
//    </div>
 
//   )
// }

// export default App

// import React from 'react'
// import UserProvider from './CONTEXT/UserContext'
// import Login from './CONTEXT/Login'
// import Home from './CONTEXT/Home'

// const App = () => {
//   return (
//     <div>
//       <UserProvider>
//         <Login></Login>
//         <Home></Home>
//       </UserProvider>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   let[state,setState]=useState(" ")
// let handleChange=()=>{
//   setState(e.target.value)
// }
// let handleSubmit=()=>{
//   e.preventDefault()
//   console.log({state}); 
// }
//   return (
//     <div>
//     <form action="" onChange={handleSubmit}>
//         <label htmlFor=''>Name:</label>
//         <input type='text' name='' id=''onChange={handleChange}></input>
//         <button>Sumbit</button>
//     </form>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   let[state,setState]=useState({
//     name:"",
//     subject:"",
//     gender:"",
//     lang:[]
//   })
//   let [lang,setLang]=useState([])

// let{name,subject,gender}=state;

// let handleChange=(e)=>{
//   let {name,value}=e.target 
//   setState({...state,[name]:value})

// }
// let handleLang=(e)=>{
//   setState({...lang,[name]:[value]})
// }
// let handleSubmit=(e)=>{
//   e.preventDefault()
//   try{
//     console.log({...state});
//     console.log({...lang});
    
//   }catch(err){
// console.log(err);


//   }
// }


//   return (
//     <div>
//       <form action="" onChange={handleSubmit}>
//         <label htmlFor=''>Name: </label>
//          <input type='text' name='name' id=''onChange={handleChange} value={name}></input><br></br><br></br>
//          <label htmlFor=''>Subject: </label>
//          <input type='text' name='subject' id=''onChange={handleChange} value={subject}></input><br></br><br></br>
//          {/* <label htmlFor=''>Age: </label>
//          <input type='text' name='age' id=''onChange={handleChange} value={age}></input><br></br><br></br> */}
//          <label>Gender</label>
//          <input type='radio' name='gender'></input><br></br><br></br>
//          MALE :<input type='radio' name='gender'value='MALE'></input>
//          FEMALE :<input type='radio'name='gender' value='FEMALE'></input><br></br><br></br>
//          <label><select>Languages</select></label>
//          <input type=" "  name='lang' onChange={handleLang} value={lang} /><br></br><br></br>
         
//          <button>Sumbit</button>
//      </form>
//      <h1>{name}</h1>
//      <h1>{subject}</h1>
//      <h1>{gender}</h1>
//     </div>
//   )
// }

// export default App
// --------------------REGISTRATION FORM-------------------

// import React, { useState } from 'react'
// import './App.css'

// const App = () => {
//   let [state,setState]=useState({
//     name:"",
//     email:"",
//     gender:"",
//     subject:"",

//   })
//   let{name,email,subject}=state

//   let handleChange=(e)=>{

//     let {name,value}=e.target

//      setState ({...state,[name]:value})

//   }

//   return (
//     <form>
//       <fieldset>
//        <legend> Registration</legend>
//       <label htmlFor=''>Name : </label>
//       <input type='text' name='name' value={name} onChange={handleChange}></input><br></br><br></br>
//       <label>E-mail : </label>
//       <input type='text' name='email' value={email} onChange={handleChange}></input><br></br><br></br>
//       <label>Subject : </label>
//      <select  type='dropdown'name='subject' id='s1'>
//       <option value={subject}></option>
//       <option value={subject}>JAVA</option>
//     <option value={subject}>WEB TECHNOLOGIES</option>
//     <option value={subject}>SQL</option>
//     <option value={subject}>REACTJS</option>
//     <option value={subject}>JDBC</option>
//     <option value={subject}>SERVLET</option>
//     <option value={subject}>DSA</option>
//     <option value={subject}>DEVOPS</option> </select><br></br>
//      <a> <button>Submit</button></a>
//      </fieldset>
//     </form>
//   )
// }

// export default App

// ------------------ROUTERS---------------------
import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './ROUTERS/Home'
import Logo from './ROUTERS/Logo'
import Login from './ROUTERS/Login'
import Signup from './ROUTERS/Signup'
import Nav from './ROUTERS/Nav'
import "./App.css"


let router=createBrowserRouter([  
    {
    path:"/",
        element:<Home></Home>,
        children:[
            {
              path:"/",
              element:<Nav></Nav>,
              children:[
                {
                 path:"/logo",
                 element:<Logo></Logo>
              },
              {
                path:"/login",
                element:<Login></Login>
              },
              {
                path:"/signup",
                element:<Signup></Signup>
              }
            ]
            
            }
           
        ]
      
    }
])

const App = () => {
  return (
    <div>
        <RouterProvider router={router}></RouterProvider>
        <Outlet></Outlet>
    </div>
  )
}

export default App

 