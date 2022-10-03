import './Home.css';
import welcomeSrc from '../images/welcome.png';

const Home = () => {
    return (
        <section id="home-section">
            <img src={welcomeSrc} alt="welcome to this app" />
            <h1 id="welcome-message">Welcome to this app.</h1>
        </section>
    );
};

export default Home;
