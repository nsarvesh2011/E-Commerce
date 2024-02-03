import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is one that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.</p>
            <p>E-commerce sites are also a popular way to sell services, like consultations, maintenance, tutoring, lessons, and more. Whether you want to learn to code a website or you’re looking for an experienced trainer to help fix your dog’s troublesome barking habit, there’s no shortage of assistance available online.</p>
            
        </div>
    </div>
  )
}
