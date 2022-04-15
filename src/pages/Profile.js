import React from 'react'
import {Link,Outlet,useNavigate} from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate()
    const goHome=()=>{
        if(true)
        navigate(-2)
        else
        navigate("/contact")
    }
  return (
    <div>Profile
    <Link to='settings'>update your profile</Link>
    <button onClick={goHome}>goHome</button>
    <Outlet/>
    </div>
  )
}

export default Profile