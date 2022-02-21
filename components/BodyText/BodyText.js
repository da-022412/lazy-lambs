import textStyles from './BodyText.module.scss';

const BodyText = ({ children }) => {
    return <p className={`${textStyles['body-text']}`}>{children}</p>;
};

export default BodyText;
