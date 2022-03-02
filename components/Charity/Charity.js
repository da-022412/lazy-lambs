import Columns from '../Columns';

import Img from '../../assets/images/charity.webp';

const CONTENT = {
    title: 'Charity',
    copy: [
        {
            text: 'We’re not just fun and lifestyle. At Lazy Lamb, we’re also committed to giving back something positive, and doing our part to help take care of others.',
        },
        {
            text: '<b>As part of our roadmap, we will donate:</b><br><br><ul><li><span style="color:#ffea0e">$1,000,000</span> to a non-profit organization selected by majority vote from our members upon hitting 60% of our roadmap </li></ul>',
        },
    ],
    img: Img,
};

const Charity = () => {
    return <Columns items={CONTENT} />;
};

export default Charity;
