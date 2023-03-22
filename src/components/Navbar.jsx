import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Coder Chat</span>
      <div className="user">
        <img src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/336471639_898053071403533_4334512859507126987_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ACtVYURCiW0AX_rhCXu&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfA4u6cNX486bK4cN-1xIbk4t4hjEbRnSWusAsApWJH9og&oe=641FA0F9" alt="" />
        <span>Tuan</span>
        <button onClick={() =>signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar