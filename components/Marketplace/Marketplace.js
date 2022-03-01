import Columns from '../Columns';

import Img from '../../assets/images/lazylamb_marketplace.webp';

const CONTENT = {
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
    img: Img,
};

const Club = () => {
    return <Columns items={CONTENT} />;
};

export default Club;
