import faqStyles from './Faqs.module.scss';

import Container from '../Container';
import Heading from '../Heading';
import Accordion from './Accordion';
import BodyText from '../BodyText';

const CONTENT = {
    faqs: [
        {
            title: 'How do I become a member?',
            copy: 'Lazy Lamb membership NFTs can only be purchased with Ether (ETH), the cryptocurrency of Ethereum. The price of a Token is one ETH.',
        },
        {
            title: 'What is Lazy Lamb?',
            copy: 'Lazy Lamb membership NFTs can only be purchased with Ether (ETH), the cryptocurrency of Ethereum. The price of a Token is one ETH.',
        },
        {
            title: 'What exactly is an NFT?',
            copy: 'Lazy Lamb membership NFTs can only be purchased with Ether (ETH), the cryptocurrency of Ethereum. The price of a Token is one ETH.',
        },
        {
            title: 'I’m new to this NFT stuff… How can I buy this thing?',
            copy: 'Lazy Lamb membership NFTs can only be purchased with Ether (ETH), the cryptocurrency of Ethereum. The price of a Token is one ETH.',
        },
        {
            title: 'Can I purchase more than one token?',
            copy: 'Lazy Lamb membership NFTs can only be purchased with Ether (ETH), the cryptocurrency of Ethereum. The price of a Token is one ETH.',
        },
    ],
    more: 'More questions? <a href="#">Visit our Discord channel.</a>',
};

const Faqs = () => {
    return (
        <main className={faqStyles.faqs}>
            <Container>
                <div className={`${faqStyles['title-container']}`}>
                    <Heading style='heading-2' level='1'>
                        Faqs
                    </Heading>
                </div>
                <Accordion items={CONTENT.faqs} />
                <div className={`${faqStyles['info-container']}`}>
                    <BodyText>{CONTENT.more}</BodyText>
                </div>
            </Container>
        </main>
    );
};

export default Faqs;
