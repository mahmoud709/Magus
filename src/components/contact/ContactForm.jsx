import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

export default function ContactForm() {
    const { t } = useTranslation();
    const [isLoading, setisLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        companyActivity: '',
        email: '',
        phone: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const clearInputs = () => {
        setFormData({
            firstName: '',
            lastName: '',
            companyName: '',
            companyActivity: '',
            email: '',
            phone: '',
        })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (isLoading) {
            // If the button is already disabled (sending in progress), prevent further submission.
            return;
        }

        setisLoading(true);

        // Your Email.js service ID and template ID
        const serviceID = 'service_wxwj3hn';
        const templateID = 'template_8a85wkm';
        // Replace with your actual Email.js user ID
        const userID = 'EK9-l8W6V8UXJZD4u';

        try {
            await emailjs.send(serviceID, templateID, formData, userID);
            toast.success('Your Email Successfully Sent', {
                position: 'top-left',
                theme: 'light',
            });
            clearInputs();
        } catch (error) {
            toast.error(error, {
                position: 'top-left',
                theme: 'light',
            });
        } finally {
            setisLoading(false);
        }
    };

    return (
        <div className='contactus container'>
            <div className="formTitle my-3 ">
                <h3>{t('ContactUs')}</h3>
            </div>
            <form className="form my-4" method='post' onSubmit={handleSubmit}>
                <div className="row g-3">
                    <div className="col-md-6 my-2">
                        <label className='my-1'>{t('firstName')}</label>
                        <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            required
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-md-6 my-2">
                        <label className='my-1'>{t('lastName')}</label>
                        <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col-md-6 my-2">
                        <label className='my-1'>{t('companyName')}</label>
                        <input
                            type="text"
                            className="form-control"
                            name="companyName"
                            required
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-md-6 my-2">
                        <label className='my-1'>{t('companyActivity')}</label>
                        <input
                            type="text"
                            className="form-control"
                            name="companyActivity"
                            required
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col-md-6">
                        <label className='my-1'>{t('email')}</label>
                        <input
                            type="email"
                            className="form-control text-lowercase"
                            name="email"
                            required
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className='my-1'>{t('phone')}</label>
                        <input
                            type="text"
                            className="form-control"
                            name="phone"
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <button className="btn btn-primary fw-bold mt-3"
                    disabled={isLoading}>{isLoading ?  t('sendBtn ...')  :  t('sendBtn') }
                </button>               
                <ToastContainer />
            </form>
        </div>
    )
}
