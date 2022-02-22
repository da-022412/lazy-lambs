import clubStyles from './Club.module.scss';

import Heading from '../Heading';
import BodyText from '../BodyText';

const Club = () => {
    return (
        <section className={`${clubStyles['club-section']}`}>
            <div className={`${clubStyles['club-container']}`}>
                <Heading style='heading-2' level='2'>
                    The Club
                </Heading>
                <div className={`${clubStyles['club-content']}`}>
                    <div className={`${clubStyles['club-info']}`}>
                        <Heading style='heading-4' level='4'>
                            The Community
                        </Heading>
                        <BodyText>
                            Lazy Lamb members are shaped by car culture: its
                            history, its technology, its lifestyle, and most
                            importantly, the thrill of the drive. While our car
                            knowledge is the common bond, it is the passions and
                            pursuits of each Member that makes Lazy Lamb so
                            unique, creating the perfect environment for
                            networking and socializing.
                        </BodyText>
                    </div>
                    <div className={`${clubStyles['club-info']}`}>
                        <Heading style='heading-4' level='4'>
                            Events & Pop-ups
                        </Heading>
                        <BodyText>
                            Join this exclusive community for physical & virtual
                            events, including parties, car meetups, charity
                            drives, and other exclusive events that bring our
                            Members together to create a truly special
                            atmosphere and forge friendships.
                        </BodyText>
                    </div>
                    <div className={`${clubStyles['club-info']}`}>
                        <Heading style='heading-4' level='4'>
                            Driving Experiences
                        </Heading>
                        <BodyText>
                            Lazy Lamb members are shaped by car culture: its
                            history, its technology, its lifestyle, and most
                            importantly, the thrill of the drive. While our car
                            knowledge is the common bond, it is the passions and
                            pursuits of each Member that makes Lazy Lamb so
                            unique, creating the perfect environment for
                            networking and socializing.
                        </BodyText>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Club;
