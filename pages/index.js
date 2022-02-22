import Hero from '../components/Hero';
import Information from '../components/Information';
import Divider from '../components/Divider';
import MultiColumn from '../components/MultiColumn';

const club = {
    title: 'The Club',
    content: [
        {
            heading: 'The Community',
            copy: 'Lazy Lamb members are shaped by car culture: its history, its technology, its lifestyle, and most importantly, the thrill of the drive. While our car knowledge is the common bond, it is the passions and pursuits of each Member that makes Lazy Lamb so unique, creating the perfect environment for networking and socializing.',
        },
        {
            heading: 'Events & Pop-ups',
            copy: 'Join this exclusive community for physical & virtual events, including parties, car meetups, charity drives, and other exclusive events that bring our Members together to create a truly special atmosphere and forge friendships.',
        },
        {
            heading: 'Driving Experiences',
            copy: 'Lazy Lamb members are shaped by car culture: its history, its technology, its lifestyle, and most importantly, the thrill of the drive. While our car knowledge is the common bond, it is the passions and pursuits of each Member that makes Lazy Lamb so unique, creating the perfect environment for networking and socializing.',
        },
    ],
};

export default function Home() {
    return (
        <>
            <Hero />
            <Information />
            <Divider />
            <MultiColumn content={club} />
            <Divider />
        </>
    );
}
