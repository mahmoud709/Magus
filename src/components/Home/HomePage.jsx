import React, { useEffect, useState } from 'react';
import './Home.css'
import homeVideo from '../../assets/videos/My Movie 85.mov'
import Map from '../Map/Map';
import Banner from '../partener/Banner';
import { Link } from 'react-router-dom';
import ContactForm from '../contact/ContactForm';
import Products from '../Products/Products';
import { useTranslation } from 'react-i18next';

export default function HomePage() {
    const { t } = useTranslation();
    const [dir, setDir] = useState('ltr');

    useEffect(() => {
        setDir(document.documentElement.classList.value);
    }, []);
    return (
        <div className='homePageVideo'>
            <div className="homeVideo position-relative">
                <video autoPlay loop muted className='homeVideo vh-100'>
                    <source src={homeVideo} type="video/mp4" />
                    Your browser doesn't support this type of video.
                </video>
                <div className={`textContent position-absolute ${dir === 'rtl' ? 'start-0' : ''} translate-middle-y`}>
                    <h1 className='fw-bold text-white text-uppercase'>{t('homeTitle')}</h1>
                    <Link to='info' className='mainBtn rounded mt-3'>
                        <button className='btn fw-bold'>{t('learnMore')}</button>
                    </Link>
                </div>
            </div>
            <Map />
            <Banner className='partnersSection' title={t('clients')} textCon={t('clientDesc')}
                btnCon={t('learnMore')} height='650px' route='parteners' />
            <Banner className='clientsSection' title={t('partenerTitle')} textCon={t('partnerDesc')} btnCon={t('learnMore')} height='600px' route='clients' />
            <Banner className='productsSection' title={t('productTitle')} textCon={t('productDesc')}
                btnCon={t('learnMore')} height='550px' route='products' />
            <Products />
            <ContactForm />
        </div>
    )
}
