import './Cards.css';
import more from '../assets/crewmate.png'; // ✅ fixed
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <div className="Card">
      <Link to={`/edit/${props.id}`}>
        <img className="moreButton" alt="edit button" src={more} />
      </Link>
      <h2 className="title">{props.name}</h2>
      <h3 className="author">Speed: {props.speed} MPH</h3>
      <p className="description">Color: {props.color}</p>
    </div>
  );
};

export default Card;
