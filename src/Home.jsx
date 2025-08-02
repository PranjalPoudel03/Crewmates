import blurImage from './assets/blur.png'; 

const Home = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to the Crewmate Challenge!</h1>
      <p>
        This platform allows you to create, view, and edit unique crewmate profiles.
        Use the navigation above to get started!
      </p>
      <img src={blurImage} alt="Background blur" />
    </div>
  );
};

export default Home;
