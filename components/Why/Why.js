import Img from '../../assets/images/checkered-flag.webp';

import Columns from '../Columns';

const CONTENT = {
    title: 'Why Lazy Lamb NFTs?',
    subTitle: 'As an NFT, your Lazy Lamb membership becomes an asset.',
    copy: [
        {
            text: 'Your token can be sold or transferred to others at any time. The NFT structure creates a unique new opportunity to try alternative economic models, which will allow us to create a loyal, engaged member community, delivering exceptional and sustainable experiences for our members for the many years to come.',
        },
    ],
    btn: 'Become a Member',
    link: '#',
    img: Img,
};

const Why = () => {
    return <Columns items={CONTENT} />;
};

export default Why;
