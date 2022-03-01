import Columns from '../Columns';

import Img from '../../assets/images/R2R-Header-logo.webp';

const CONTENT = {
    title: 'Charity',
    copy: [
        {
            text: 'We’re not just fun and lifestyle. At Lazy Lamb, we’re also committed to giving back something positive, and doing our part to help take care of others.',
        },
        {
            text: '<b>As part of our roadmap, we will donate:</b><br><br><ul><li><span style="color:#ffea0e">$200,000</span> to Ride2Revive upon hitting 20% of our roadmap</li><li><span style="color:#ffea0e">$600,000</span> to a non-profit organization selected by majority vote from our members upon hitting 60% of our roadmap</li></ul>',
        },
        {
            text: '<b>Ride2Revive</b> is a non-profit organization that has helped and inspired hundreds of children battling life-threatening illnesses for over ten years by giving them a once-in-a-lifetime exhilarating race car experience, bringing miles of smiles to the kids and their families.',
        },
        {
            text: '<b>Ride2Revive</b> benefits children from various hospitals and organizations, including Joe DiMaggio Children’s Hospital, Holtz Children’s Hospital, Nicklaus Children’s Hospital, and more. To learn more about their work and mission, visit ride2revive.org.',
        },
    ],
    img: Img,
};

const Charity = () => {
    return <Columns items={CONTENT} />;
};

export default Charity;
