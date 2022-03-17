import Columns from '../Columns';

import Img from '../../assets/images/charity.webp';

const CONTENT = {
    title: 'Charity',
    copy: [
        {
            text: 'We’re not just fun and lifestyle. At Lazy Lamb, we’re also committed to giving back something positive, and doing our part to help take care of others.',
        },
        {
            text: 'We will donate <span style="color:#ffea0e">10% of net profits</span> for the entirety of the project (including aftermarket sales)</b> to a charity or non-profit organization selected by majority vote from our members.',
        },
    ],
    img: Img,
};

const Charity = () => {
    return <Columns items={CONTENT} />;
};

export default Charity;
