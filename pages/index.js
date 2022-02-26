import Hero from '../components/Hero';
import Information from '../components/Information';
import Divider from '../components/Divider';
import MultiColumn from '../components/MultiColumn';
import Columns from '../components/Columns';
import Team from '../components/Team';

import PlaceHolder from '../assets/images/lazy-lamb-black-lambo.webp';
import MarketplaceImg from '../assets/images/lazylamb_marketplace.webp';
import GameImg from '../assets/images/lazylamb_game.webp';
import CharityImg from '../assets/images/R2R-Header-logo 1.webp';

export default function Home() {
    return (
        <>
            <Hero />
            <Information />
            <Divider />
            <MultiColumn content={club} />
            <Divider />
            <Columns content={marketplace} />
            <Divider />
            <Columns content={game} />
            <Divider />
            <Columns content={lambs} />
            <Divider />
            <Columns content={charity} />
            <Divider />
            <Team />
            <Divider />
        </>
    );
}

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

const marketplace = {
    title: 'The Marketplace',
    copy: [
        {
            text: 'Our vision is to open the first NFT marketplace where anyone can buy, sell, or trade digital vehicles in a fully immersive and interactive 3D environment. All transactions are recorded in the Ethereum blockchain using smart contracts to verify and manage the ownership and history of the items.',
        },
        {
            text: 'The project is also designed with sustainability and long-term utility. 50% of the profits from every item sold in the marketplace will be stored on a locked, secure wallet, that will be used as an expansion fund guided by the community.',
        },
        {
            text: 'For the token holder, our goal is to build a utilitarian project that is fun, original, but also valuable, with the potential of creating equity over time.',
        },
        {
            text: 'Join us in this unique opportunity to make history and disrupt an industry.',
        },
    ],
    img: MarketplaceImg,
};

const game = {
    title: 'The Game',
    subTitle:
        'Live out your dreams of racing exotic vehicles for real prizes on our play-to-earn (P2E) racing game. Race your own NFT supercar against other members to earn rewards.',
    list: [
        {
            li: 'Buy, sell and trade digital vehicles from the marketplace',
        },
        {
            li: 'Race other members for fun or compete for real prizes',
        },
        {
            li: 'Your starter vehicle is the same car from your Lazy Lamb artwork',
        },
        {
            li: 'Take your machine for a test drive on the virtual track',
        },
        {
            li: 'View and manage your collection in your personal VR garage',
        },
        {
            li: 'Join virtual car meets and hangouts',
        },
        {
            li: 'Complete daily challenges to earn rewards',
        },
    ],
    btn: 'Become a Member',
    link: '#',
    img: GameImg,
};

const lambs = {
    title: 'The Lambs',
    copy: [
        {
            text: 'In addition to the membership benefits, Each Lazy Lamb NFT also includes a unique digital collectible, officially owned by the token holder. Each Lamb artwork is unique, and no two are the same (And some are very, very special...) The collection includes 10,000 unique collectibles with multiple traits, including different supercar models, colors, accessories, expressions, clothing, and much more.',
        },
        {
            text: 'The complete collection is stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. <a href="#">View our provenance record.</a>',
        },
    ],
    img: PlaceHolder,
};

const charity = {
    title: 'Charity',
    copy: [
        {
            text: 'We’re not just fun and lifestyle. At Lazy Lamb, we’re also committed to giving back something positive, and doing our part to help take care of others.',
        },
        {
            text: '<b>As part of our roadmap, we will donate:</b><br><br><ul><li><span style="color:#ffea0e">$200,000</span> to Ride2Revive upon hitting 20% of our roadmap</li><li><span style="color:#ffea0e">$600,000</span> to a non-profit organization selected by majority vote from our members upon hitting 60% of our roadmap</li></ul>',
        },
        {
            text: '<b>Ride2Revive</b> is a non-profit organization that has helped and inspired hundreds of children battling life-threatening illnesses for over ten years by giving them a once-in-a-lifetime exhilarating race car experience, bringing miles of smiles to the kids and their families.',
        },
        {
            text: '<b>Ride2Revive</b> benefits children from various hospitals and organizations, including Joe DiMaggio Children’s Hospital, Holtz Children’s Hospital, Nicklaus Children’s Hospital, and more. To learn more about their work and mission, visit ride2revive.org.',
        },
    ],
    img: CharityImg,
};
