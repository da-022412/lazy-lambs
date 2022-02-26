import Image from 'next/image';

import Heading from '../Heading';
import BodyText from '../BodyText';

import infoStyles from './Info.module.scss';

import imgOne from '../../assets/images/lazy-lambo-trippy.webp';
import imgTwo from '../../assets/images/lazy-lamb-purple-shades.webp';
import imgThree from '../../assets/images/lazy-lambs-gold.webp';
import imgFour from '../../assets/images/lazy-lamb-lambo-green.webp';

const images = [
    {
        id: 0,
        img: imgOne,
    },
    {
        id: 1,
        img: imgTwo,
    },
    {
        id: 2,
        img: imgThree,
    },
    {
        id: 3,
        img: imgFour,
    },
];

const Information = () => {
    return (
        <section>
            <div className={`${infoStyles['info-container']}`}>
                <div className={`${infoStyles['info-imgs']}`}>
                    {images.map((img) => (
                        <Image
                            src={img.img}
                            height={250}
                            width={250}
                            key={img.id}
                        />
                    ))}
                </div>
                <div className={`${infoStyles['info-content']}`}>
                    <Heading style='heading-3' level='3'>
                        The project offers 10,000 limited non-fungible
                        membership tokens with proof of ownership stored on the
                        Ethereum blockchain.
                    </Heading>
                    <BodyText>
                        Token ownership grants access to our private car club,
                        with exclusive member-only benefits to experience the
                        high-end automotive lifestyle, including the chance to
                        win three real-life supercars!
                    </BodyText>
                    <BodyText>
                        Members can also visit our virtual marketplace to buy,
                        sell, or trade digital vehicles directly from our
                        metaverse dealership, and experience them on a virtual
                        track.
                    </BodyText>
                </div>
            </div>
        </section>
    );
};

export default Information;
