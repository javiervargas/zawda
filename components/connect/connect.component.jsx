import styles from './connect.module.scss';
import { useState } from 'react';
import { saveFormData } from '../../firebase.utils';

const Connect = ({pretitle,title,text,buttonText,additionalClass}) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        message: ''
    });
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Get the current date and time in ISO format
            const submissionDate = new Date().toISOString();

	    const response = await fetch('/api/contact', {
	        method: 'POST',
      		headers: {
		        'Content-Type': 'application/json',
      		},
	        body: JSON.stringify(formData),
            });

//	    console.log("response:" , response); 

        /*    await saveFormData(
                formData.firstName,
                formData.lastName,
                formData.email,
                formData.company,
                formData.message,
                submissionDate  // Pass the submission date to the saveFormData function
            );*/
            
            // Clear the form inputs
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                company: '',
                message: ''
            });
            
            // Set the success message
            setSuccessMessage("Thank you for reaching out! We'll be in touch with you shortly.");
            setErrorMessage(null);
        } catch (error) {
            setErrorMessage("Error saving data: " + error.message);
            setSuccessMessage(null);
        }
    };
    
    return (
        <div id="contact" className={`${styles.connectWrapper} ${additionalClass ? styles.arabic : ''}`}>
            <div className={`vertical-container ${additionalClass ? 'right' : ''}`}>
                <p className='small-par'>{pretitle}</p>
                <h1>{title}</h1>
                <div className='dash white'></div>
                <p>{text}</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input required type="text" name="firstName" placeholder={additionalClass ? "الاسم الأول" : "First Name"} onChange={handleInputChange} />
                    <input required type="text" name="lastName" placeholder={additionalClass ? "اسم العائلة" : "Last Name"} onChange={handleInputChange} />
                </div>
                <div>
                    <input required type="email" name="email" placeholder={additionalClass ? "بريد إلكتروني" : "Email"} onChange={handleInputChange} />
                    <input required type="text" name="company" placeholder={additionalClass ? "شركة" : "Company"} onChange={handleInputChange} />
                </div>
                <textarea name="message" placeholder={additionalClass ? "رسالة" : "Message"} onChange={handleInputChange}></textarea>
                <button className='light-button' type="submit">{buttonText}</button>
                {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
            </form>
           
        </div>
    )
}
Connect.defaultProps = {
    pretitle:"Start Saving Today",
    title:"Let's Connect",
    text:<>Bitcoin is for everyone. At Zawda <br /> we’re making Bitcoin adoption more <br /> accessible for all.</>,
    buttonText:"Submit"
}
export default Connect;
