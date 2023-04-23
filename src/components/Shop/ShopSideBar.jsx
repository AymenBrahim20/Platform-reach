/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useState } from 'react';

function ShopSideBar  ()  {

    const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  return (
    <div className="col-lg-3 col-md-3">
          <div className="shop__sidebar">
            <div className="sidebar__categories">
              <div className="section-title">
                <h4>Categories</h4>
              </div>
              <div className="categories__accordion">
                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <div className="card-heading active">
                      <a data-toggle="collapse" data-target="#collapseOne">Jewelry & Accessories</a>
                    </div>
                    <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                      <div className="card-body">
                        <ul>
                          <li><a href="#">Accessories</a></li>
                          <li><a href="#">Necklaces</a></li>
                          <li><a href="#">Rings</a></li>
                          <li><a href="#">Bracelets</a></li>
                         
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-heading">
                      <a data-toggle="collapse" data-target="#collapseTwo">Art & Collectibles</a>
                    </div>
                    <div id="collapseTwo" className="collapse" data-parent="#accordionExample">
                      <div className="card-body">
                        <ul>
                          <li><a href="#">Photography</a></li>
                          <li><a href="#">Prints</a></li>
                          <li><a href="#">Painting</a></li>
                          <li><a href="#">Collectibles</a></li>
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-heading">
                      <a data-toggle="collapse" data-target="#collapseThree">Home & Living</a>
                    </div>
                    <div id="collapseThree" className="collapse" data-parent="#accordionExample">
                      <div className="card-body">
                        <ul>
                          <li><a href="#">Home Decor</a></li>
                          <li><a href="#">Furniture</a></li>
                          <li><a href="#">Outdoor and gardening</a></li>
                         
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-heading">
                      <a data-toggle="collapse" data-target="#collapseFour">Clothing & Shoes</a>
                    </div>
                    <div id="collapseFour" className="collapse" data-parent="#accordionExample">
                      <div className="card-body">
                        <ul>
                          <li><a href="#">Men's</a></li>
                          <li><a href="#">Women's</a></li>
                          <li><a href="#">Kids' & Baby</a></li>
                          <li><a href="#">Bags & Purses</a></li>
                        
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
           <div className="sidebar__filter">
  <div className="section-title">
    <h4>Shop by price</h4>
  </div>
  <div className="filter-range-wrap" >
  <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content" >
  <input className="ui-slider-range ui-corner-all ui-widget-header" type="range"  min={0} max={99}    style={{left: '0%', width: '100%'}} />
  <span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default" style={{left: '0%'}}>
  </span>
  <span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default" style={{left: '100%'}} /></div>
    
    <div className="range-slider">
      <div className="price-input">
        <p>Price:</p>
        <input type="text"  />
        <input type="text" id="maxamount" />
      </div>
    </div>
  </div>
  <a href="#">Filter</a>
</div>

            <div className="sidebar__sizes">
              <div className="section-title">
                <h4>Shop by size</h4>
              </div>
              <div className="size__list">
                <label htmlFor="xxs">
                  xxs
                  <input type="checkbox" id="xxs" />
                  <span className="checkmark" />
                </label>
                <label htmlFor="xs">
                  xs
                  <input type="checkbox" id="xs" />
                  <span className="checkmark" />
                </label>
                <label htmlFor="xss">
                  xs-s
                  <input type="checkbox" id="xss" />
                  <span className="checkmark" />
                </label>
                <label htmlFor="s">
                  s
                  <input type="checkbox" id="s" />
                  <span className="checkmark" />
                </label>
                <label htmlFor="m">
                  m
                  <input type="checkbox" id="m" />
                  <span className="checkmark" />
                </label>
                <label htmlFor="ml">
                  m-l
                  <input type="checkbox" id="ml" />
                  <span className="checkmark" />
                </label>
                <label htmlFor="l">
                  l
                  <input type="checkbox" id="l" />
                  <span className="checkmark" />
                </label>
                <label htmlFor="xl">
                  xl
                  <input type="checkbox" id="xl" />
                  <span className="checkmark" />
                </label>
              </div>
            </div>
            <div className="sidebar__color">
              <div className="section-title">
                <h4>Shop by Color</h4>
              </div>
              <div className="size__list color__list">
                <label htmlFor="black">
                  Blacks
                  <input type="checkbox" id="black" />
                  <span className="checkmark" />
                </label>
                <label htmlFor="whites">
                  Whites
                  <input type="checkbox" id="whites" />
                  <span className="checkmark" />
                </label>
                <label htmlFor="reds">
                  Reds
                  <input type="checkbox" id="reds" />
                  <span className="checkmark" />
                </label>
                <label htmlFor="greys">
                  Greys
                  <input type="checkbox" id="greys" />
                  <span className="checkmark" />
                </label>
                <label htmlFor="blues">
                  Blues
                  <input type="checkbox" id="blues" />
                  <span className="checkmark" />
                </label>
                <label htmlFor="beige">
                  Beige Tones
                  <input type="checkbox" id="beige" />
                  <span className="checkmark" />
                </label>
                <label htmlFor="greens">
                  Greens
                  <input type="checkbox" id="greens" />
                  <span className="checkmark" />
                </label>
                <label htmlFor="yellows">
                  Yellows
                  <input type="checkbox" id="yellows" />
                  <span className="checkmark" />
                </label>
              </div>
            </div>
            
            <div className="sidebar__color">
              <div className="section-title">
                <h4>Sort By</h4>
              </div>
              <div className="size__list color__list">
                <label htmlFor="asc">
                  Price(Lowest First)
                  <input type="radio" id="asc" value="asc" name="price"  onChange={e=>setSort("asc")}   />
                  <span className="checkmark" />
                </label>
                <label htmlFor="desc">
                Price(Highest First)
                  <input type="radio" id="desc" value="desc" name="price" onChange={e=>setSort("desc")} />
                  <span className="checkmark" />
                </label>
                
              </div>
            </div>

          </div>
        </div>
  )
}
export default ShopSideBar