import Hero from '../components/Hero';
import Information from '../components/Information';
import Divider from '../components/Divider';
import Club from '../components/Club';
import Marketplace from '../components/Marketplace';
import Game from '../components/Game';
import Lambs from '../components/Lambs';
import Lambo from '../components/Lambo';
import Charity from '../components/Charity';
import RoadMap from '../components/RoadMap';
import Team from '../components/Team';
import Why from '../components/Why';

export default function Home() {
    return (
        <>
            <Hero />
            <Information />
            <Divider />
            <Club />
            <Divider />
            <Marketplace />
            <Divider />
            <Game />
            <Divider />
            <Lambs />
            <Divider />
            <Lambo />
            <Divider />
            <Charity />
            <Divider />
            <RoadMap />
            <Divider />
            <Team />
            <Divider />
            <Why />
        </>
    );
}
