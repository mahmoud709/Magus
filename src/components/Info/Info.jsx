import React from 'react'
import Information from './Information'
import ContactForm from '../contact/ContactForm'
import { useTranslation } from 'react-i18next'
export default function Info() {
  const { t } = useTranslation();
  return (
      <>
      <div className="aboutUs">
        <div className='container py-5'>
          <Information title={t('aboutus')} info={t('aboutContent')} />
          <Information title={t('vision')} info={t('visionContent')} />
          <Information title={t('mission')} info={t('missionContent')} />
        </div>
      </div>
      <ContactForm/>
      </>
  )
}
