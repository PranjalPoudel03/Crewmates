import { useState } from 'react';
import { supabase } from '../client';
import './AddCrew.css';
import crewmates from '../assets/crewmate.png'; 

const AddCrew = () => {
  const [post, setPost] = useState({ name: "", speed: "", color: "" });

  const createPost = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from('crewmate').insert(post).select();

    if (error) {
      alert("Failed to save crewmate: " + error.message);
    } else {
      window.location = "/gallery";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h1>Create a New Crewmate</h1>
      <img src={crewmates} alt="crewmates" className="crewmate-image" />

      <form>
        <div className="form-box">
          <label htmlFor="name"><strong>Name:</strong></label>
          <input type="text" id="name" name="name" placeholder="Enter crewmate's name" onChange={handleChange} />
        </div>

        <div className="form-box">
          <label htmlFor="speed"><strong>Speed (mph):</strong></label>
          <input type="text" id="speed" name="speed" placeholder="Enter speed in mph" onChange={handleChange} />
        </div>

        <div className="form-box">
          <label><strong>Color:</strong></label>
          {["Red", "Green", "Blue", "Purple", "Yellow", "Orange", "Pink", "Rainbow"].map((color) => (
            <label key={color}>
              <input type="radio" name="color" value={color} onChange={handleChange} /> {color}
            </label>
          ))}
        </div>
      </form>

      <button className="submit-button" onClick={createPost}>Create Crewmate</button>
    </div>
  );
};

export default AddCrew;
