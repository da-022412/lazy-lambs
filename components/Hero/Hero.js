import Image from 'next/image';

import Heading from '../Heading';
import BodyText from '../BodyText';
import Button from '../Button';

import heroStyles from './Hero.module.scss';

import heroImg from '../../assets/images/lazy-lamb-purple-lambo.webp';

const Hero = () => {
    return (
        <section className={`${heroStyles['hero-section']}`}>
            <div className={`${heroStyles['heading-container']}`}>
                <Heading style='heading-1' level='1'>
                    The World’s First NFT Car Club & Marketplace
                </Heading>
                <BodyText>
                    Lazy Lamb is the first luxury and exotic car club where
                    membership is purchased through an NFT and owned by the
                    token-holders.
                </BodyText>
                <div className={`${heroStyles['hero-btns']}`}>
                    <div className={`${heroStyles['btn-container']}`}>
                        <a href='#'>
                            <Button style='primary-btn'>Become a Member</Button>
                        </a>
                    </div>
                    <div className={`${heroStyles['btn-container']}`}>
                        <a href='#'>
                            <Button style='secondary-btn'>
                                Join the Discord
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
            <figure className={`${heroStyles['hero-img']}`}>
                <Image src={heroImg} height='600' width='600' />
            </figure>
        </section>
    );
};

export default Hero;
