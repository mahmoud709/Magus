import React, { useEffect } from 'react'
import './clients.css';
import img1 from '../../assets/Suppliers logos/7.png';
import img2 from '../../assets/Suppliers logos/img1.svg';
import img3 from '../../assets/Suppliers logos/img2.svg';
import img4 from '../../assets/Suppliers logos/enha-logo-vector.png';
import img5 from '../../assets/Suppliers logos/HON logo_200x37.png';
import img6 from '../../assets/Suppliers logos/img5.webp';
import img7 from '../../assets/Suppliers logos/logo.jpg';
import img8 from '../../assets/Suppliers logos/img6.jpg';
import img9 from '../../assets/Suppliers logos/img7.png';
import img10 from '../../assets/Suppliers logos/img8.png';
import img11 from '../../assets/Suppliers logos/img9.png';
import img12 from '../../assets/Suppliers logos/img10.png';
import img13 from '../../assets/Suppliers logos/img11.png';
import img14 from '../../assets/Suppliers logos/img3.png'
import img15 from '../../assets/Suppliers logos/Enware_blk_wBrand_01.jpg';
import img16 from '../../assets/Suppliers logos/logo-black.svg';
import img17 from '../../assets/Suppliers logos/logo-wide.jpg';
import img18 from '../../assets/Suppliers logos/wc_white.png';
import img19 from '../../assets/Suppliers logos/Respirex.png'
import Banner from '../partener/Banner';
import ContactForm from '../contact/ContactForm';
import { useTranslation } from 'react-i18next';

export default function Clients() {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    const { t } = useTranslation();

    const allLogos = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19]
    return (
        <div className='ourClients'>
            <Banner className='clientsSection' title={t('partenerTitle')} height='200px'/>
            <div className="allLogos row justify-content-center align-items-center">
                {allLogos.map((el, index) => (
                    <div className="col-md-4 text-center my-3" key={index}>
                        <img src={el} alt={`Logo${index}`} className={`cursorPointer clientLogo${index+1}`} width='120' />
                    </div>
                ))}
            </div>
            <ContactForm/>
        </div>
    )
}
