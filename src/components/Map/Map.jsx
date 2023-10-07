import React from 'react';
import './Map.css';
import { useTranslation } from 'react-i18next';
import mapVideo from '../../assets/videos/map section video.mp4';
export default function Map() {
    const { t } = useTranslation();
    return (
        <div className='mapSection' style={{ marginTop: '-7px' }}>
            <div className="mapVideo position-relative ">
                <video muted autoPlay loop className='w-100'>
                    <source src={mapVideo} type='video/mp4' />
                    Your browser doesn't support this type of video.
                </video>
                <div>
                    <div className="textMapContent position-absolute row">
                        <div className="title col-md-8 ps-5">
                            <h1 className='text-white'>{t('mapTitle')}</h1>
                            <p className='text-white aboutMagus fs-5'>{t('mapContent')}</p>
                        </div>
                        <div className="col-md-4">
                            <div className="experiences row">
                                <div className="clientsNum text-center me-3 col-md-6 mb-3">
                                    <span className='fs-4'>+2000</span>
                                    <p className='fs-5'>{t('clients')}</p>
                                </div>
                                <div className="brands text-center me-3 col-md-4">
                                    <span className='fs-4'>+35</span>
                                    <p className='fs-5'>{t('brands')}</p>
                                </div>
                                <div className="year text-center me-3 col-md-6">
                                    <span className='fs-4'>+50</span>
                                    <p className='fs-5'>{t('yearEx')}</p>
                                </div>
                                <div className="brands text-center me-6 col-md-4">
                                    <span className='fs-4'>+5</span>
                                    <p className='fs-5'>{t('locations')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
