import Image from 'next/image';

import Heading from '../Heading';
import Button from '../Button';

import heroStyles from './Hero.module.scss';

import Container from '../Container';

import heroImg from '../../assets/images/lazy-lamb-red-purple.webp';

const Hero = () => {
    return (
        <div className={heroStyles.hero}>
            <Container>
                <div className={`${heroStyles['hero-container']}`}>
                    <div className={`${heroStyles['heading-container']}`}>
                        <Heading style='heading-1' level='1'>
                            The World’s First NFT Car Club & Marketplace
                        </Heading>
                        <div className={`${heroStyles['hero-btns']}`}>
                            <Button style='primary-btn' link='#'>
                                Become a Member
                            </Button>
                            <Button style='secondary-btn' link='#'>
                                Join the Discord
                            </Button>
                        </div>
                    </div>
                    <figure className={`${heroStyles['hero-img']}`}>
                        <Image
                            src={heroImg}
                            height='600'
                            width='600'
                            alt='Lazy Lambs NFT'
                        />
                    </figure>
                </div>
            </Container>
        </div>
    );
};

export default Hero;
