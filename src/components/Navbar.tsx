import { Link } from '@tanstack/react-router'
import {LogIn} from 'lucide-react'

const Navbar = () => (
    <nav className="navbar">
      <div className="brand">
        <div  className="mark">
         <div className="glyph"/>
        </div>
            <Link to="/">
                 <span>My App</span>
            </Link>
      </div>
      <div className='actions'>
        <Link to="/sign-in/$" className="btn-primary">
          <LogIn size={16}/>
          <span>Sign in</span></Link>
      </div>
    </nav>
  )
export default Navbar