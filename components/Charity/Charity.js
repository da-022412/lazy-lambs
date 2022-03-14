import Columns from '../Columns';

import Img from '../../assets/images/charity.webp';

const CONTENT = {
    title: 'Charity',
    copy: [
        {
            text: 'We’re not just fun and lifestyle. At Lazy Lamb, we’re also committed to giving back something positive, and doing our part to help take care of others.',
        },
        {
            text: 'As part of our roadmap, <b>we will donate<span style="color:#ffea0e">10% of the project</span></b> to a non-profit organization selected by majority vote from our members, including aftermarket sales.',
        },
    ],
    img: Img,
};

const Charity = () => {
    return <Columns items={CONTENT} />;
};

export default Charity;
