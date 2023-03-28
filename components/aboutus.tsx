import React from 'react'
import Image from 'next/image'
import Member from './member'

const AboutUs: React.FC  = () => {
    return (
        <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
            <div className='container mx-auto px-11'>
                <p className='leading-tight max-w-5xl mx-auto text-4xl tracking-tighty'>
                    <strong>Want to modernize your closet? Leave that job to us</strong><br/>
                    Our team of expert designers has created the best available designs in the market
                </p>
            </div>
            <div className='container mx-auto px-11 text-center mt-28'>
                <h2>Our Team</h2>
                <div className='mt-2'>The &ldquo;Core&rdquo;</div>
                <div className='mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 lg:gap-20'>

                    <div>Sampann Raheja</div>
                    <div>Rasagnya Choppa</div>
                    <div>Deepika Indran</div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs