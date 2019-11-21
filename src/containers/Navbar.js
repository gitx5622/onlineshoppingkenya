import React from 'react'
import { Button} from 'antd';
import '../css/Layout.css';
import '../css/ProductList.css';

export default function Navbar() {
    return (
        <div>
             <div id="flipkart-navbar">
        <div className="container">
          <div className="row row1">
            <ul className="nav-list" style={{color:'#183546'}}>
            </ul>
          </div>
  
         </div>

    {/* On Hover Navbar with Categories */}

    <div class="row"  style={{height:'40px',backgroundColor:'#fff', color:'#183546'}}>
          <div class="col-md-8 offset-md-2">
            <div class="dropdown">
              <button class="dropbtn">Computing</button>
                <div class="dropdown-content">
                  <div class="row" style={{height:"500px",width:"1200px"}}>
                    <div class="col-3">
                    <hr/><strong> <h6>LAPTOPS</h6></strong><hr/>
                        <a href="/#">Notebooks</a>
                        <a href="/#">Macbooks</a>
                        <a href="/#">Tablet PC</a>
                        <hr/><h6>LAPTOPS</h6><hr/>
                        <a href="/#">Monitors</a>
                        <a href="/#">All-in-Ones</a>
                        <a href="/#">Towers</a>
                       
                    </div>
                  <div class="col-3">
                  <hr/><b><h6>PERIPERALS & ACCESSORIES</h6></b><hr/>
                        <a href="/#">Networking</a>
                        <a href="/#">Projectors</a>
                        <a href="/#">Keyboards</a>
                        
                        <hr/> <b><h6>STORAGE</h6></b><hr/>
                        <a href="/#">Memory Cards</a>
                        <a href="/#">Flash Drives</a>
                        <a href="/#">External HD</a>
                    </div>
                    <div class="col-6">
                        <img src="https://cdn.pixabay.com/photo/2015/01/20/14/27/office-605503_960_720.jpg" alt="computing" style={{height:"500px"}}/>
                    </div>
                  </div>
                  </div>
                </div>
        <span class="separator"></span>
        <div class="dropdown">
          <button class="dropbtn">Grocery</button>
          <div class="dropdown-content">
          <div class="row" style={{height:"500px",width:"1100px"}}>
                    <div class="col-3">
                    <hr/><strong> <h6>DRINKS</h6></strong><hr/>
                        <a href="/#">Beer, Wine & Spirits</a>
                        <a href="/#">Water</a>
                        <a href="/#">Carbonated Drinks</a>
                        <hr/><h6>Food Cupboard</h6><hr/>
                        <a href="/#">Sugar</a>
                        <a href="/#">Cooing Oils</a>
                        <a href="/#">Candy & Chocolate</a>
                    </div>
                  <div class="col-3">
                  <hr/><b><h6>HOUSEHOLD</h6></b><hr/>
                        <a href="/#">Laundry</a>
                        <a href="/#">Papers</a>
                        <a href="/#">Kitchen Cleaner</a>
                        
                        <hr/><b><h6>BRANDS</h6></b><hr/>
                        <a href="/#">Velvex</a>
                        <a href="/#">Ketepa</a>
                        <a href="/#">Brookside</a>
                    </div>
                    <div class="col-6">
                        <img src="https://www.pointpleasantresort.com/sites/default/files/images/Generic%20Bag(1).jpg" alt="computing" style={{height:"500px"}}/>
                    </div>
                  </div>
          </div>
        </div>
        <span class="separator"></span>
        <div class="dropdown">
          <button class="dropbtn">Electronics</button>
          <div class="dropdown-content">
          <div class="row" style={{height:"500px",width:"900px"}}>
                    <div class="col-3">
                    <hr/><strong> <h6>TELEVISIONS</h6></strong><hr/>
                        <a href="/#">Smart Tvs</a>
                        <a href="/#">LED & LCD TVs</a>
                        <a href="/#">Curved Tvs</a>
                        <hr/><h6>AUDIO/VIDEO DEVICES</h6><hr/>
                        <a href="/#">Speakers</a>
                        <a href="/#">Home-Theater</a>
                        <a href="/#">Earphones</a>
                    </div>
                  <div class="col-3">
                  <hr/><b><h6>CAMERAS</h6></b><hr/>
                        <a href="/#">Camcorders</a>
                        <a href="/#">CCTV Cameras</a>
                        <a href="/#"> Digital SLR Cameras</a>
                       
                        <hr/><b><h6>BRANDS</h6></b><hr/>
                        <a href="/#">Sony Tv</a>
                        <a href="/#">Hisense Tv</a>
                        <a href="/#">Vision Plus</a>
                    </div>
                    <div class="col-6">
                        <img src="https://expatelectronics.co.ke/image/cache/catalog/SONY%2043%20INCH%20ANDROID-500x500.jpg" alt="computing" style={{height:"500px"}}/>
                    </div>
                  </div>
          </div>
        </div>
        <span class="separator"></span>
        <div class="dropdown">
          <button class="dropbtn">Jewelry</button>
          <div class="dropdown-content">
          <div class="row" style={{height:"500px",width:"800px"}}>
                    <div class="col-3">
                    <hr/> <strong> <h6>NECKLESSES</h6></strong><hr/>
                        <a href="/#">Generic</a>
                        <a href="/#">Fashion</a>
                        <hr/><h6>WATCHES</h6><hr/>
                        <a href="/#">Smart Watch</a>
                        <a href="/#">Generic</a>
                        <a href="/#">Fashion</a>
                        
                    </div>
                  <div class="col-3">
                  <hr/> <b><h6>CHAINS</h6></b><hr/>
                        <a href="/#">Fashion</a>
                        <a href="/#">Generic</a>
                        
                        <hr/> <b><h6>CATEGORIES</h6></b><hr/>
                        <a href="/#">Mens's Jewelry</a>
                        <a href="/#">Women's Jewelry</a>
                    </div>
                    <div class="col-6">
                        <img src="https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/750x750/Sumangali-Jewellery-Collection-01.jpg" alt="computing" style={{height:"500px"}}/>
                    </div>
                  </div>
          </div>
        </div>
        <span class="separator"></span>
        <div class="dropdown">
          <button class="dropbtn">Phones</button>
          <div class="dropdown-content">
          <div class="row" style={{height:"500px",width:"780px"}}>
                    <div class="col-3">
                    <hr/><strong> <h6>MOBILE PHONES</h6></strong><hr/>
                        <a href="/#">Smartphones</a>
                        <a href="/#">Iphones</a>
                        <a href="/#">Imported Phones</a>
                        <hr/> <h6>BEST SELLERS</h6><hr/>
                        <a href="/#">Tecno</a>
                        <a href="/#">Infinix</a>
                        <a href="/#">Oppo</a>
                        
                    </div>
                  <div class="col-3">
                  <hr/> <b><h6>ACCESSORIES</h6></b><hr/>
                        <a href="/#">Powerbanks</a>
                        <a href="/#">Screen Covers</a>
                        <a href="/#">Batteries</a>
                       
                        <hr/><b><h6>BRANDS</h6></b><hr/>
                        <a href="/#">Samsung</a>
                        <a href="/#">Iphone</a>
                        <a href="/#">Huawei</a>
                    </div>
                    <div class="col-6">
                        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone8-gold-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795416637" alt="computing"/>
                    </div>
                  </div>
          </div>
        </div>
        <span class="separator"></span>
        <div class="dropdown">
          <button class="dropbtn">Tablets</button>
              <div class="dropdown-content">
                  <div class="row" style={{height:"500px",width:"700px",textAlign:"center"}}>
                    <div class="col-sm">
                    <hr/><strong> <h6>IPADS</h6></strong><hr/>
                        <a href="/#">Notebooks</a>
                        <a href="/#">Macbooks</a>
                        <a href="/#">Tabs</a>
                        <hr/><h6>KIDS TABLET</h6><hr/>
                        <a href="/#">Kids Tab </a>
                        <a href="/#">All-in-Ones</a>
                        <a href="/#">Toys</a>
                      
                        
                    </div>
                    <div class="col-sm">
                        <img src="https://images-na.ssl-images-amazon.com/images/I/41VE1x1z5vL.jpg" alt="computing" style={{height:"500px"}}/>
                    </div>
                  </div>
          </div>
        </div>
        <span class="separator"></span>
        <div class="dropdown">
          <button class="dropbtn">Clothing</button>
                <div class="dropdown-content">
                  <div class="row" style={{height:"500px",width:"650px",textAlign:"center"}}>
                    <div class="col-sm">
                    <hr/><strong> <h6>WOMENS FASHION</h6></strong><hr/>
                        <a href="/#">Tops</a>
                        <a href="/#">Dresses</a>
                        <a href="/#">Skirts</a>
                        <hr/><h6>MENS FASHION</h6><hr/>
                        <a href="/#">Shirts</a>
                        <a href="/#">Trousers</a>
                        <a href="/#">Men's suit</a>

                    </div>
                    <div class="col-sm">
                        <img src="http://bestjquery.com/tutorial/product-grid/demo6/images/img-8.jpg" alt="computing" style={{height:"500px"}}/>
                    </div>
                  </div>
              </div>
        </div>
        <span class="separator"></span>
        <div class="dropdown">
          <button class="dropbtn">Top brands</button>
          <div class="dropdown-content">
                  <div class="row" style={{height:"150px",width:"550px",textAlign:"center"}}>
                    <div class="col-6">
                     
                      <img src="https://freepngimg.com/download/nike/28092-1-nike-logo-clipart.png" alt="..." style={{height:"80px",width:"110px",textAlign:"center"}}/>
                     </div>

                    <div class="col-6">
                      <img src="https://upload.wikimedia.org/wikipedia/en/7/75/Versace_logo.png" alt="..." style={{height:"80px",width:"110px",textAlign:"center"}}/>
                      </div>
                  </div>
                  <div class="row" style={{height:"150px",width:"550px",textAlign:"center"}}>
                    <div class="col-6">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Fila_logo.svg/400px-Fila_logo.svg.png" alt="..." style={{height:"80px",width:"250px",textAlign:"center"}}/>
                    </div>

                    <div class="col-6">
                     <img src="https://i.pinimg.com/originals/7d/e0/81/7de0816213e99e985984880bd052469b.png" alt="..." style={{height:"110px",width:"110px",textAlign:"center"}}/>
                    </div>
                  </div>
                  <div class="row" style={{height:"150px",width:"550px",textAlign:"center"}}>
                    <div class="col-6">
                    <img src="https://ucarecdn.com/5bfc85bf-4ce7-413c-851d-1ebe1cf407e2~1/nth/0/" alt="..." style={{height:"80px",width:"110px",textAlign:"center"}}/>
                    </div>

                    <div class="col-6">
                      <img src="https://i0.wp.com/www.theartofresale.com/wp-content/uploads/2016/04/plainicon.com-42201-512px.png?ssl=1" alt="..." style={{height:"80px",width:"110px",textAlign:"center"}}/>
                    </div>
                  </div>
          </div>
        </div>
        <Button type="primary" shape="round" style={{height:'37px'}}>SHOP FLEXIBLY</Button>
          </div>
        </div>
        <div className="container">
        <div className="row" style={{height:'35px',fontWeight:"bolder",backgroundColor:'#92DAF1',color:'#fff',textTransform:"uppercase",marginLeft:'200px',marginRight:200}}>

            <div class="col-4">
              Top New Deals Delivery
            </div>
            <span class="separator-down"></span>
            <div class="col-4">
          <center> FREE  Delivery</center>
            </div>
            <span class="separator-down"></span>
            <div class="col-3">
              Shopping global
            </div>
        
        </div>  
        </div>
        </div> 

        </div>
    )
}
