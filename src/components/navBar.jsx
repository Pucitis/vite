import { Link} from 'react-scroll';
import  FadeIn from '../animation/FadeIn';


function NavBar(){
    return(
      <div className="navbar bg-gradient-to-r from-slate-900 to-slate-700">
  <div className="navbar-start">
        <FadeIn>
    
   
    <button className=" text-xl" onClick={() => window.location.reload(false)}>
      <img src="assets/owl_logo300.png" className=" max-h-16 md:max-h-28" alt=""  style={{filter: `invert(1)`}} />
    </button>
    
  </FadeIn>
  </div>
  <div className="navbar-center hidden lg:flex">
  <FadeIn>
    <ul className="menu menu-horizontal px-1">
     <li> <Link className='font-medium' to="portfolio" smooth={true} duration={500} >Portfolio</Link></li>
      
      <li><Link className='font-medium' to="timeline" smooth={true} duration={500}>Pieredze</Link> </li>
    </ul>
</FadeIn>
  </div>
  <div className="navbar-end">
    <FadeIn>
    <a className="btn">Sazinies ar mani</a>
    
  </FadeIn>
  </div>
  <div className="dropdown dropdown-end">  
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gradient-to-r from-slate-900 to-slate-700 rounded-box w-52 lg:hidden">
         <li><a> <Link to="portfolio" smooth={true} duration={500} >Portfolio</Link> </a></li>
        
       <li><a > <Link to="timeline" smooth={true} duration={500}>Timeline</Link></a> </li>
      </ul>
    </div>
</div>
    )
}
export default NavBar