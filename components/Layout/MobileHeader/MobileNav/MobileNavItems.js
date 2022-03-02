import MobileNavItem from './MobileNavItem';

const MobileNavItems = ({ items }) => {
    return items.map(({ title, slug }, index) => (
        <MobileNavItem title={title} slug={slug} key={index} />
    ));
};

export default MobileNavItems;
