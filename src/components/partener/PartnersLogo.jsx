/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import img1 from '../../assets/partners logos/img1.jpg';
import img2 from '../../assets/partners logos/img2.png';
import img3 from '../../assets/partners logos/img3.jpg';
import img4 from '../../assets/partners logos/img4.jpg';
import img5 from '../../assets/partners logos/img5.jpg';
import img6 from '../../assets/partners logos/img6.png';
import img7 from '../../assets/partners logos/electricitycompany.png'
import img8 from '../../assets/partners logos/img8.jpg';
import Banner from './Banner';
import ContactForm from '../contact/ContactForm';
import { useTranslation } from 'react-i18next';
export default function PartnersLogo() {
    useEffect(()=>{
        window.scroll(0,0)
    },[])
    const { t } = useTranslation();
    const logos = [img1, img2, img3, img4, img5, img6, img7, img8];
    return (
        <div className='partnersLogos'>
            <Banner className='clientsSection' title={t('clients')} height='300px' margin='50px' />
            <div className="allLogos row justify-content-center align-items-center">
                {logos.map((el, index) => (
                    <div className="col-md-3 text-center my-3" key={index}>
                        <img src={el} alt={`Logo${index}`} className={`cursorPointer partnerImg${index+1}`} width='120' />
                    </div>
                ))}
            </div>
            <ContactForm/>
        </div>
    );
}

