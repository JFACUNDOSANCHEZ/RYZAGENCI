import Hero from '../components/Hero';
import LogoMarquee from '../components/LogoMarquee';
import Services from '../components/Services';
import WebShowcase from '../components/WebShowcase';
import AntiGravityPortfolio from '../components/AntiGravityPortfolio';
import Marquee from '../components/Marquee';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <main>
            <Hero />
            {/* <LogoMarquee /> */}
            <Services />
            <WebShowcase />
            <Pricing />
            {/* <AntiGravityPortfolio /> */}
            <Marquee />
            <Footer />
        </main>
    );
};

export default Home;
