import listStyles from './List.module.scss';

const List = ({ children }) => {
    return (
        <ul className={listStyles.list}>
            {children.map((x, y) => {
                <li className={`${listStyles['list-item']}`} key={y}>
                    {x.li}
                </li>;
            })}
        </ul>
    );
};

export default List;
