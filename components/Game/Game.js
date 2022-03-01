import Columns from '../Columns';

import Img from '../../assets/images/lazylamb_game.webp';

const CONTENT = {
    title: 'The Game',
    subTitle:
        'Live out your dreams of racing exotic vehicles for real prizes on our play-to-earn (P2E) racing game. Race your own NFT supercar against other members to earn rewards.',
    list: [
        {
            item: 'Buy, sell and trade digital vehicles from the marketplace',
        },
        {
            item: 'Race other members for fun or compete for real prizes',
        },
        {
            item: 'Your starter vehicle is the same car from your Lazy Lamb artwork',
        },
        {
            item: 'Take your machine for a test drive on the virtual track',
        },
        {
            item: 'View and manage your collection in your personal VR garage',
        },
        {
            item: 'Join virtual car meets and hangouts',
        },
        {
            item: 'Complete daily challenges to earn rewards',
        },
    ],
    btn: 'Become a Member',
    link: '#',
    img: Img,
};

const Game = () => {
    return <Columns items={CONTENT} />;
};

export default Game;
