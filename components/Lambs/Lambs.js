import Columns from '../Columns';

import Img from '../../assets/images/lazy-lamb-black-lambo.webp';

const CONTENT = {
    title: 'The Lambs',
    copy: [
        {
            text: 'In addition to the membership benefits, Each Lazy Lamb NFT also includes a unique digital collectible, officially owned by the token holder. Each Lamb artwork is unique, and no two are the same (And some are very, very special...) The collection includes 10,000 unique collectibles with multiple traits, including different supercar models, colors, accessories, expressions, clothing, and much more.',
        },
        {
            text: 'The complete collection is stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. <a href="#">View our provenance record.</a>',
        },
    ],
    img: Img,
};

const Lambs = () => {
    return <Columns items={CONTENT} />;
};

export default Lambs;
