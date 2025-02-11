import React, { Fragment } from 'react'
import { userContext } from './UserContext'

const Home = () => {
  return (
    <div>
        <userContext.Consumer>

            {
                ({phno})=>{
                    return<Fragment>
                        {phno}
                    </Fragment>
                }
            }
            </userContext.Consumer>

        
    </div>
  )
}

export default Home