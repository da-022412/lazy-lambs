import Image from 'next/image';

import lamboStyles from './Lambo.module.scss';

import Container from '../Container';
import Heading from '../Heading';
import BodyText from '../BodyText';

import LamboImg from '../../assets/images/3lambos.webp';
import LamboBroward3Img from '../../assets/images/lambobroward3.webp';

const CONTENT = {
    list: '<span style="font-size:1.5rem;"><b><span style="color:#ffea0e;">50%</span> Lamborghini Urus<br><span style="color:#ffea0e;">70%</span> Lamborghini Urus<br><span style="color:#ffea0e;">100%</span> Lamborghini Huracán</b></span>',
};

const Lambo = () => {
    return (
        <Container>
            <div className={`${lamboStyles['lambo-columns']}`}>
                <div className={`${lamboStyles['lambo-img-container']}`}>

                    <figure className={`${lamboStyles['LamboBroward3Img-img']}`}>
                        <Image
                            src={LamboBroward3Img}
                            height={64}
                            width={252}
                            alt='Lamborghini Broward - Official Supply Partner'
                        />
                    </figure>



                    <figure className={`${lamboStyles['lambo-img']}`}>
                        <Image
                            src={LamboImg}
                            height={475}
                            width={556}
                            alt='3 Lambos'
                        />
                    </figure>
                </div>
                <div className={`${lamboStyles['lambo-content']}`}>
                    <Heading style='heading-2' level='2'>
                        The Big Triple Lamb-o Giveaway
                    </Heading>
                    <BodyText>
                        Enjoy the high-end lifestyle with the ultimate symbol of
                        prestige and quality.
                    </BodyText>
                    <BodyText>
                        We’re giving away three Lamborghini vehicles, each
                        unlocked by hitting a roadmap percentage target sell:
                    </BodyText>
                    <BodyText>{CONTENT.list}</BodyText>
                    <BodyText>
                        Each membership token is a chance to win. The lucky
                        winners will be selected from an RNG hosted in our Smart
                        Contract for 100% transparency.
                    </BodyText>
                </div>
            </div>
        </Container>
    );
};

export default Lambo;
