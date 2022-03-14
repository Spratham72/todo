import { Link } from "react-router-dom";
import '../style/navbar.css';
export const Navbar=()=>{
    return <div className="wrap">
	
      <h3 className="li"><Link to="/">Add Todo</Link></h3>
      <h3 className="li"><Link to="/display">Todos</Link></h3>

</div>
}