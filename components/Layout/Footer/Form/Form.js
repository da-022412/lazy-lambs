import formStyles from './Form.module.scss';

import Heading from '../../../Heading';

const Form = () => {
    return (
        <div className={`${formStyles['form-container']}`}>
            <Heading style='heading-5' level='5'>
                Get Updates
            </Heading>
            <form className={formStyles.form}>
                <label htmlfor='submission' hidden>
                    Email
                </label>
                <input
                    id='submission'
                    placeHolder='Enter email address'
                    name='email'
                    type='email'
                    required
                />
                <button
                    type='submit'
                    className={`${formStyles['submit-button']}`}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;
