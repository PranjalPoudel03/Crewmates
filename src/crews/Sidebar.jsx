import { Link } from 'react-router-dom';
import './Sidebar.css';
import amongus from '../assets/amongus.jpg'; // ✅ fixed relative path

export default function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/new">Create a Crewmate!</Link></li>
          <li><Link to="/gallery">Crewmate Gallery</Link></li>
        </ul>
      </nav>
      <img src={amongus} alt="Crewmate Logo" className="amongus" />
    </div>
  );
}
