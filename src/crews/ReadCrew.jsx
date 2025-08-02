import { useState, useEffect } from 'react';
import Card from '../components/Cards';
import { supabase } from '../client';

const ReadCrew = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase.from('crewmate').select();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ color: 'white', textAlign: 'center' }}>Your Crewmate Gallery!</h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '2rem'
        }}
      >
        {
          posts && posts.length > 0
            ? posts
                .sort((a, b) => a.id - b.id)
                .map((post) => (
                  <Card
                    key={post.id}
                    id={post.id}
                    name={post.name}
                    speed={post.speed}
                    color={post.color}
                  />
                ))
            : <h2 style={{ color: 'white' }}>No Crewmates Yet 😞</h2>
        }
      </div>
    </div>
  );
};

export default ReadCrew;
