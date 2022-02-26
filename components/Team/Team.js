import Image from 'next/image';

import teamStyles from './Team.module.scss';

import Container from '../Container';
import Heading from '../Heading';
import BodyText from '../BodyText';

import PlaceHolder from '../../assets/images/lazy-lamb-pfp.webp';

const Team = () => {
    return (
        <Container>
            <Heading style='heading-2' level='2'>
                The Team
            </Heading>
            <div className={`${teamStyles['team-columns']}`}>
                {team.map(({ title, text, img }, index) => (
                    <div className={`${teamStyles['team-item']}`} key={index}>
                        <Image
                            src={img}
                            width={200}
                            height={200}
                            className={`${teamStyles['team-img']}`}
                            alt='Profile Pic'
                        />
                        <Heading style='heading-3' level='3'>
                            {title}
                        </Heading>
                        <BodyText>{text}</BodyText>
                    </div>
                ))}
            </div>
        </Container>
    );
};

const team = [
    {
        title: 'Grey',
        text: 'The Dreamer',
        img: PlaceHolder,
    },
    {
        title: 'Daxxx',
        text: 'The Car Guru',
        img: PlaceHolder,
    },
    {
        title: 'Sean C.',
        text: 'The Shaman',
        img: PlaceHolder,
    },
    {
        title: 'Electronshaper',
        text: 'The Weaver',
        img: PlaceHolder,
    },
    {
        title: 'Lenny G.',
        text: 'The Pet Lamb',
        img: PlaceHolder,
    },
];

export default Team;
