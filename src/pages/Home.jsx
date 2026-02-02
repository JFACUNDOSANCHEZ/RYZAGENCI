import Hero from '../components/Hero';
import Services from '../components/Services';
import AntiGravityPortfolio from '../components/AntiGravityPortfolio';
import Marquee from '../components/Marquee';
import Team from '../components/Team';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <main className="bg-slate-900">
            <Hero />
            <Services />
            <Team />
            <AntiGravityPortfolio />
            <Marquee />
            <Footer />
        </main>
    );
};

export default Home;
