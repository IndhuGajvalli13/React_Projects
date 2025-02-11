import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
<div>
  
</div>

   <article >
    <aside className='h1'>
      <Link className='txt' to="/">Home</Link>
      <br></br>
      <Link className='txt' to="/">Nav</Link>
      <br></br>
      <Link className='txt' to="/logo">Logo</Link>
      <br></br>
      <Link className='txt'to="/signup">Signup</Link>
      <br></br>
      <Link className='txt' to="/login">Login</Link>
    </aside>
    <aside className='l2'>
      <Outlet></Outlet>
    </aside>
   </article>
   
   </div>

  )
}

export default Home