import './Header.css'
import logo from '../../assets/images/companyLogo.png'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function Header() {
    const { t } = useTranslation();
    const [isOpen, setIsopen] = useState(false)
    function closePanal() {
        setIsopen(false)
    }
    function openPanal() {
        setIsopen(true);
    }
    const { i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
    useEffect(() => {
        const rootElement = document.documentElement;
        if (isArabic) {
            rootElement.classList.add('rtl');
        } else {
            rootElement.classList.remove('rtl');
        }
    }, [isArabic]);
    return (
        <header className='header'>
            <div className="tet">
                <div className="headerContent">
                    <div className="companyLogo ">
                        <Link to='/'>
                            <img src={logo} alt='CompanyLogo' />
                        </Link>
                    </div>
                        <div className="Baricon d-flex justify-content-between align-content-center">
                            <div className="language-select mx-3 mt-2">
                                <select id="languageSelect" className="form-select" onChange={(e) => i18n.changeLanguage(e.target.value)}>
                                    <option value="en">English</option>
                                    <option value="ar">العربية</option>
                                </select>
                            </div>
                            <i className="ri-align-justify fs-2 text-white mt-1 cursorPointer" onClick={openPanal}></i>
                        </div>
                </div>

                {isOpen ?
                    <div className="navigation position-fixed vh-100 text-start text-white" >
                        <div className="closeIcon position-relative" onClick={closePanal}>
                            <i className="ri-close-line fs-2 text-danger cursorPointer position-absolute end-0 px-2"></i>
                        </div>
                        <ul className='p-0 mt-5'>
                            <Link to='info' onClick={closePanal}>
                                <li className='list-group fs-4 p-3 text-white'>{t('aboutus')}</li>
                            </Link>
                            <Link to='parteners' onClick={closePanal}>
                                <li className='list-group fs-4 p-3 text-white'>{t('clients')}</li>
                            </Link>
                            <Link to='clients' onClick={closePanal}>
                                <li className='list-group fs-4 p-3 text-white'>{t('partenerTitle')}</li>
                            </Link>
                            <Link to='products' onClick={closePanal}>
                                <li className='list-group fs-4 p-3 text-white'>{t('productTitle')}</li>
                            </Link>
                        </ul>
                    </div> : ''}
            </div>
        </header>
    )
}