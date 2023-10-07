/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import './footer.css'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';
export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer className='bg-dark py-5 '>
            <div className="container px-0">
                <section className='row footer'>
                    <div className="col-md-4 ps-3">
                        <div className="logo">
                            <h2 className='h4 text-white'>Magus</h2>
                        </div>
                        <div className="textinfo text-white">
                            <p className='w-75'>{t('footerInfo')}</p>
                        </div>
                    </div>
                    <div className="col-md-4 ps-3">
                        <div className="title text-white">
                            <h2 className='h4'>{t('locations')}</h2>
                        </div>
                        <ul className='p-0 text-white'>
                            <li className='list-group' style={{ width: "fit-content" }}> -{t('Riyadh')}</li>
                            <li className='list-group' style={{ width: "fit-content" }}> -{t('Jeddah')}</li>
                            <li className='list-group' style={{ width: "fit-content" }}> -{t('Yanbuh')}</li>
                            <li className='list-group' style={{ width: "fit-content" }}> -{t('Jubail')}</li>
                            <li className='list-group' style={{ width: "fit-content" }}> -{t('Dubai')}</li>
                        </ul>
                    </div>
                    <div className="col-md-4 ps-3">
                        <div className="title text-white">
                            <h2 className='h4'>{t('ourbusiness')}</h2>
                        </div>
                        <ul className='p-0 '>
                            <Link to='clients' className='text-white'>
                                <li className='list-group' style={{ width: "fit-content" }} >{t('partenerTitle')}</li>
                            </Link>
                            <Link to='products' className='text-white'>
                                <li className='list-group' style={{ width: "fit-content" }}>{t('products')}</li>
                            </Link> 
                            <Link to='parteners' className='text-white'>
                                <li className='list-group' style={{ width: "fit-content" }}>{t('clients')}</li>
                            </Link>
                        </ul>
                    </div>
                </section>
                {/* Start Social Icons */}
                <div className="socialIcons py-3 d-flex justify-content-between align-items-center">
                    <div className="title">
                        <h4 className='text-white'>{t('socialMedia')}</h4>
                    </div>
                    <div className="socialIcons">
                        <a href='https://www.linkedin.com/company/magus-international/' className="fs-3 text-white mx-2 text-decoration-none ri-linkedin-box-fill" title="Linkedin Profile" ></a>
                        <a href='https://wa.me/+966504599130' className="fs-3 text-white mx-2 text-decoration-none ri-whatsapp-fill" title='whatsapp linke' ></a>
                        <a href='mailto:headoffice@magusksa.com' className="fs-3 text-white mx-2 text-decoration-none ri-mail-open-fill" title='Email-Link'></a>
                    </div>
                </div>
            </div>
            <hr />
        </footer>
    )
}
