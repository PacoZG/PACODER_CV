import React from 'react'
import { useTranslation } from 'react-i18next'

const WhoIAm = () => {
  const { t } = useTranslation()
  return (
    <div className=" flex flex-col items-center md:flex-row md:justify-center bg-gray-300 dark:bg-gray-900 p-3 md:p-10 w-full transition duration-500">
      <div className="flex flex-col items-center md:pl-20">
        <img
          className=" w-10/12 h-10/12 md:h-96 md:w-80 border-4 border-black dark:border-gray-300 rounded-xl transition duration-500 "
          src="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1625155266/CV%20Pics/kxcpai1mniycdxszmgbq.jpg"
          alt="profile"
        />
      </div>
      <div className="p-10 md:pt-8 w-full md:w-3/4">
        <h1 className="text-2xl text-gray-700 dark:text-gray-300 text-right transition duration-500">
          {t('Presentation.line0')}
          <span className="text-blue-700 text-right text-2xl">FRANCISCO ZAVALA GONZALEZ</span>
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-right text-xl transition duration-500">
          Junior Full Stack Developer
        </p>{' '}
        <br />
        <p className="text-lg text-gray-700 dark:text-gray-300 text-right transition duration-500">
          {t('Presentation.line1')}
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-right transition duration-500">
          {t('Presentation.line2')}
        </p>
      </div>
    </div>
  )
}

export default WhoIAm