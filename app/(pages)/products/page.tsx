import React from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import Banner from '@/app/components/Banner'

const page = () => {
  return (
    <>
      <Navbar />
      <Banner title="Προϊόντα" backgroundImage="/images/banners/pswmi4.jpg" breadcrumbs="Προϊόντα" objectPosition="object-[center_0%] lg:object-[center_40%] md:object-[center_40%]"/>
      <div>products</div>
      <Footer />
    </>
  )
}

export default page