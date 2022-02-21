import buttonStyles from './Button.module.scss';

const PrimaryButton = ({ children }) => {
    return <div className={`${buttonStyles['primary-btn']}`}>{children}</div>;
};

export default PrimaryButton;
