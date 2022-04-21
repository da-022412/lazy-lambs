import Columns from '../Columns';

import Img from '../../assets/images/lazylamb_game.webp';

const CONTENT = {
    title: 'Motorsport Racing Tickets',
    subTitle:
        'Witness the action of the world’s fastest machines in person.',
    
    text: 'We’ll be giving 400 Tickets for motorsport racing events like Formula 1, Nascar, Super Trofeo, and others. Winners will get two tickets each, with 100 winners per year.',

    btn: 'Join the Whitelist',
    link: 'https://whitelist.lazylamb.com/',
    img: Img,
};

const Game = () => {
    return <Columns items={CONTENT} />;
};

export default Game;
