import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import './EditCrew.css';

const EditCrew = () => {
  const { id } = useParams();
  const [post, setPost] = useState({ name: "", speed: "", color: "" });

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await supabase.from('crewmate').select().eq('id', id).single();
      if (data) setPost(data);
    };
    fetchPost();
  }, [id]);

  const updatePost = async (e) => {
    e.preventDefault();
    await supabase.from('crewmate').update(post).eq('id', id);
    window.location = "/gallery";
  };

  const deletePost = async (e) => {
    e.preventDefault();
    await supabase.from('crewmate').delete().eq('id', id);
    window.location = "/gallery";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <form>
        <label htmlFor="name">Name</label><br />
        <input type="text" id="name" name="name" value={post.name} onChange={handleChange} /><br /><br />

        <label htmlFor="speed">Speed (MPH)</label><br />
        <input type="text" id="speed" name="speed" value={post.speed} onChange={handleChange} /><br /><br />

        <label>Color</label><br />
        <label><input type="radio" name="color" value="Red" checked={post.color === "Red"} onChange={handleChange} /> Red</label><br />
        <label><input type="radio" name="color" value="Blue" checked={post.color === "Blue"} onChange={handleChange} /> Blue</label><br />
        <label><input type="radio" name="color" value="Green" checked={post.color === "Green"} onChange={handleChange} /> Green</label><br /><br />
        <label><input type="radio" name="color" value="Yellow" checked={post.color === "Yellow"} onChange={handleChange} /> Yellow</label><br /><br />
        <label><input type="radio" name="color" value="Black" checked={post.color === "Black"} onChange={handleChange} /> Black</label><br /><br />

        <input type="submit" value="Update" onClick={updatePost} />
        <button className="deleteButton" onClick={deletePost}>Delete</button>
      </form>
    </div>
  );
};

export default EditCrew;
