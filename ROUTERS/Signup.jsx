import React from 'react'


const Signup = () => {
  return (
    <div>
      <form>
         <fieldset id='s1'>
        <legend id='s2'>SIGN UP</legend>
           Name :<input id='i1'type='text' name='name' placeholder='Enter name'></input><br></br>
        E-Mail :<input id='i2' type='email' name='email' placeholder='Enter email'></input><br></br>
        Phone no : <input id='i3' type='tel' name='phoneno' placeholder='Enter phno'></input><br></br>
        Pass word :<input id='i4' type='password' name='password' placeholder='Enter password'></input><br></br>
        Confirm Password : <input type='password' name='password'placeholder='confirm password'></input><br></br>
        <a><button>SIGN UP</button></a><br></br><br></br>
        <a href='link1'>Registration?</a><br></br><br></br>
        </fieldset>
      </form>
      
    </div>
  )
}

export default Signup