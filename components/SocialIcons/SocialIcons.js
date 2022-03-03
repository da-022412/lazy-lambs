import Image from 'next/image';

import socialStyles from './Social.module.scss';

import Twitter from '../../assets/images/twitter.png';
import Discord from '../../assets/images/discord.png';
import Reddit from '../../assets/images/reddit.png';
import Instagram from '../../assets/images/instagram.png';

const SocialIcons = () => {
    return (
        <div className={`${socialStyles['icons-container']}`}>
            {CONTENT.map(({ img, link }, y) => (
                <div className={socialStyles.icon} key={y}>
                    <a href={link} target='_blank'>
                        <Image
                            src={img}
                            height={24}
                            width={24}
                            alt='Social Icon'
                        />
                    </a>
                </div>
            ))}
        </div>
    );
};

const CONTENT = [
    {
        img: Twitter,
        link: 'https://twitter.com/',
    },
    {
        img: Discord,
        link: '#',
    },
    {
        img: Reddit,
        link: '#',
    },
    {
        img: Instagram,
        link: '#',
    },
];

export default SocialIcons;
