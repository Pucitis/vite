import { Link} from 'react-scroll';

function NavBar(){
    return(
        <div className="navbar bg-gradient-to-r from-slate-900 to-slate-700">
  <div className="flex-none">
  </div>
  <div className="flex-1">
    <button className="btn btn-ghost normal-case text-xl" onClick={() => window.location.reload(false)}>OwlDesign</button>
   
  </div>
  <div className="flex-none">
   
     <div className="dropdown dropdown-left dropdown-bottom">
         <label tabIndex={0} className="btn btn-ghost btn-circle">
  
            
  
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
  
  
        </label>
         <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li> <Link to="portfolio" smooth={true} duration={500} >Portfolio</Link></li>
          
            <li><Link to="timeline" smooth={true} duration={500}>Timeline</Link></li>
        </ul>
        </div>
  </div>
</div>
    )
}
export default NavBar