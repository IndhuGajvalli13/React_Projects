import React from 'react'


const Login = () => {
  return (
    <form><h1 id='head'>LOGIN PAGE</h1>
    <div className='log'>
      {/* <img src='https://i.pinimg.com/736x/5e/89/cf/5e89cf3e8e867c3785b21bb92440db76.jpg' height="800px" width="100%"></img> */}
      <section className='l1'>
        Name : <input type='text' name='name'></input><br></br>
        E-Mail : <input type='email' name='email'></input><br></br>
        Pass word: <input type='password' name='password'></input><br></br>
        <a><button>LOGIN</button></a>
        <a><button>CANCEL</button></a><br></br><br></br>
        <a href='link'>Forgot password?</a>
 
      </section>
      
    </div>
    </form>
  )
}

export default Login