/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Categories from './Home/Categories'
import Slider from   './Home/Slider'
import FeaturedProducts  from   './Home/FeaturedProducts'
import Trend  from   './Home/Trend'
import Discount from   './Home/Discount'
import Services from   './Home/Services'
function Layout () {
  return (
    <div>
 <Categories/>
<FeaturedProducts/>
<Slider/>
<Trend/>
<Discount/>
<Services/> 

 
  </div>
    
  )
}
export default Layout