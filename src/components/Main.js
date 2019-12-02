import React, { Component } from 'react'
import '../css/Layout.css';
import '../css/ProductList.css';
import 'antd/dist/antd.css';
import brand from '../images/brand.png';
import axios from 'axios';
import { productListURL} from "../constants";
import Basket from './Basket';
import Slider from '../containers/Slider';
import Filter from './Filter';
import { Menu,Icon, Button, Input, AutoComplete} from 'antd';
const { SubMenu } = Menu;

const { Option } = AutoComplete;



class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
          size: '',
          sort: '', 
          cartItems: [],  
          filteredProducts: [], 
          dataSource: [],
          loading: false,
          error: null,
          data: [],
          openKeys: ['sub1'],
            
        }
     }
  
     rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
  
     componentDidMount() {


      if (localStorage.getItem('cartItems')) {
        this.setState({ cartItems: JSON.parse(localStorage.getItem('cartItems')) });
      }
    
       this.setState({ loading: true });
       axios
         .get(productListURL)
         .then(res => {
           this.setState({ data: res.data, loading: false });
         })
         .catch(err => {
           this.setState({ error: err, loading: false });
         });
     }
   
    
     onOpenChange = openKeys => {
       const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
       if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
         this.setState({ openKeys });
       } else {
         this.setState({
           openKeys: latestOpenKey ? [latestOpenKey] : [],
         });
       }
       };

    handleRemoveFromCart = (e, product) => {
      this.setState(state => {
        const cartItems = state.cartItems.filter(a => a.id !== product.id);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        return { cartItems: cartItems };
      })
    }
    
    handleAddToCart = (e, product) => {
      this.setState(state => {
        const cartItems = state.cartItems;
        let productAlreadyInCart = false;
    
        cartItems.forEach(cp => {
          if (cp.id === product.id) {
            cp.count += 1;
            productAlreadyInCart = true;
          }
        });
    
        if (!productAlreadyInCart) {
          cartItems.push({ ...product, count: 1 });
        }
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        return { cartItems: cartItems };
      });
    }
    
    listProducts = () => {
      this.setState(state => {
        if (state.sort !== '') {
          state.data.sort((a, b) =>
            (state.sort === 'lowestprice'
              ? ((a.price > b.price) ? 1 : -1)
              : ((a.price < b.price) ? 1 : -1)));
        } else {
          state.data.sort((a, b) => (a.id > b.id) ? 1 : -1);
        }
        if (state.size !== '') {
          return { filteredProducts: state.product && state.product.filter(a => a.availableSizes.indexOf(state.size.toUpperCase()) >= 0) };
        }
        return { filteredProducts: state.product};
      })
    }
    
    handleSortChange = (e) => {
      this.setState({ sort: e.target.value });
      this.listProducts();
    }
    handleSizeChange = (e) => {
      this.setState({ size: e.target.value });
      this.listProducts();
    }
    handleClick = (e)=> {
      console.log('hover', e);
    }
  
    onSelect =(value)=> {
     console.log('onSelect', value);
   }
   
   getRandomInt = (max, min = 0)=> {
     return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
   }
   
   searchResult = (query) => {
     return new Array(this.getRandomInt(5))
       .join('.')
       .split('.')
       .map((item, idx) => ({
         query,
         category: `${query}${idx}`,
         count: this.getRandomInt(200, 100),
       }));
   }
   
   renderOption=(item)=> {
     return (
       <Option key={item.category} text={item.category}>
         <div className="global-search-item">
           <span className="global-search-item-desc">
             Found {item.query} on
             <a
               href={`http://localhost:8000/products?q=${item.query}`}
               target="_blank"
               rel="noopener noreferrer"
             >
               {item.category}
             </a>
           </span>
           <span className="global-search-item-count">{item.count} results</span>
         </div>
       </Option>
     );
   }
   
   handleSearch = value => {
     this.setState({
       dataSource: value ? this.searchResult(value) : [],
     });
   };
  
    render() {
      // const products = this.state.products.slice(0, this.state.showItems);
      const data = this.state.data;
      const {cartItems,dataSource} =this.state;
        return (
  <div>
      <div id="flipkart-navbar">
        <div className="container">
          <div className="row row1">
            <ul className="nav-list" style={{color:'#183546'}}>

             
            </ul>
          </div>
    <div className="row row2">
          <div className="col-sm-2">
              <a href="/"><img src={brand} alt='...' style={{height:'75px',width:'75px',marginTop:'-50px'}}></img></a>
          </div>

          <div className="col-sm-8">
            <div className="content">
               <form  style={{marginLeft:"100px", width:"500px"}}>
               <div className="global-search-wrapper" style={{ width: 300,marginTop:-40 }}>
                  <AutoComplete
                    className="global-search"
                    size="large"
                    style={{ width: 400 }}
                    dataSource={dataSource.map(this.renderOption)}
                    onSelect={this.onSelect}
                    onSearch={this.handleSearch}
                    placeholder="input here"
                    optionLabelProp="text"
                  >
                    <Input style={{width:"100%"}}
                      suffix={
                        <Button
                          className="search-btn"
                          style={{ marginRight: -12 }}
                          size="large"
                          type="primary"
                        >
                          <Icon type="search" />
                        </Button>
                      }
                    />
                  </AutoComplete>
                </div>
              </form>
          </div>
        </div>
      <div className="col-sm-2" style={{marginTop:-40}}>
        <div className="image">
            <i className="fa fa-shopping-basket fa-3x" aria-hidden="true" style={{color:"blue"}}></i>
                <span className='badge badge-warning' id='lblCartCount'>{cartItems.length}</span>
                    <div className="overlay">
                      <Basket cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart}/>
                    </div>
        </div>
      </div>
    </div>
  </div>

    {/* On Hover Navbar with Categories */}

    <div class="row"  style={{height:'40px',backgroundColor:'#fff', color:'#183546'}}>
          <div class="col-md-8 offset-md-2">
            <div class="dropdown">
              <button class="dropbtn"><a href="/electronics">Computing</a></button>
                <div class="dropdown-content">
                  <div class="row" style={{height:"500px",width:"95%"}}>
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
          <button class="dropbtn"><a href="/grocery">Grocery</a></button>
          <div class="dropdown-content">
          <div class="row" style={{height:"500px",width:"200%"}}>
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
          <button class="dropbtn"><a href="/electronics">Electronics</a></button>
          <div class="dropdown-content">
          <div class="row" style={{height:"500px",width:"150%"}}>
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
          <button class="dropbtn"><a href="/jewelry">Jewelry</a></button>
          <div class="dropdown-content">
          <div class="row" style={{height:"500px",width:"150%"}}>
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
          <button class="dropbtn"><a href="/phones">Phones</a></button>
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
          <button class="dropbtn"><a href="/tablets">Tablets</a></button>
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
          <button class="dropbtn"><a href="/electronics">Clothing</a></button>
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
          <button class="dropbtn"><a href="/electronics">Top brands</a></button>
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
        <div className="row" style={{height:'35px',fontWeight:"bolder",backgroundColor:'#92DAF1',color:'#183546',textTransform:"uppercase",marginLeft:'200px',marginRight:200}}>

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


<div className="row" style={{marginTop: "20px", marginLeft:"40px"}}>
    <div className="col-2" style={{borderStyle: "solid",borderColor:"#F3F5F6 ", fontSize:"30px",borderRadius:"5px"}}>
    <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ width: 256 }}
      >
        <h3><b>CATEGORIES</b></h3>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Fashion</span>
              </span>
            }
          >
          <Menu.Item key="1">Women's Fashion</Menu.Item>
          <Menu.Item key="2">Men's Fashion</Menu.Item>
          <Menu.Item key="3">Exclusive Fashion</Menu.Item>
          <Menu.Item key="4">Shop by Brands</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              
              <span>FootWear</span>
            </span>
          }
        >
          <Menu.Item key="5">Women's Shoes</Menu.Item>
          <Menu.Item key="6">Men's Shoes</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Baby Boy's Fashion</Menu.Item>
            <Menu.Item key="8">Baby girl's Fashion</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <Icon type="setting" />
              <span>Home and Kitchen</span>
            </span>
          }
        >
          <Menu.Item key="9">SMALL KITCHEN APPL</Menu.Item>
          <Menu.Item key="10">SMALL HOME APPL</Menu.Item>
          <Menu.Item key="11">LARGE APPLIANCES</Menu.Item>
          <Menu.Item key="12">FURNITURE</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
              <div className="col-7"  style={{borderStyle: "solid",borderColor:"#F3F5F6 ",borderRadius:"5px",marginLeft: "10px",marginRight: "10px"}}>
                  <Slider/>
                  </div>
                  <div className="col-2"  style={{marginRight:"40px", borderStyle: "solid",textAlign:"center",borderColor:"#F3F5F6 ", borderRadius:"5px"}} >
                  <h3><b>ONLINE</b></h3>
                 <img src="https://previews.123rf.com/images/macrovector/macrovector1602/macrovector160200213/52694854-self-service-supermarket-full-shopping-trolley-cart-with-fresh-grocery-products-and-red-handle-reali.jpg"
                 style={{width:150,height:200}} alt="..."/>
                 <h3><b>SHOPPING</b></h3>
                 <img src="http://www.itoole.com/wp-content/uploads/2015/12/TOP-DEALS-THIS-HOUR.jpg"  style={{width:150,height:100}} alt="..."/>
                 <h3><b>KENYA</b></h3>
                  </div>
                  
                </div>

      <div className="row" style={{marginLeft:'60px',marginRight:'60px'}}>
                <div className="card" style={{marginTop: "20px"}}>
                <h5 className="card-header"  style={{backgroundColor:"#92DAF1"}}>Categories</h5>
                <div className="card-body">
                <div className="row">
                  <div className="col"><img src="https://img.icons8.com/color/480/000000/kitchenwares.png" alt="..." style={{height:"120px",width:"120px"}}></img>Kitchenwares</div>
                  <div className="col"><img src="https://img.icons8.com/color/480/000000/jewelry.png" alt="..." style={{height:"120px",width:"120px"}}></img>Jewelry</div>
                  <div className="col"><img src="https://img.icons8.com/color/480/000000/home-decorations.png" alt="..." style={{height:"120px",width:"120px"}}></img>Home-decorations</div>
                  <div className="col"><img src="https://img.icons8.com/color/480/000000/stationery.png" alt="..." style={{height:"120px",width:"120px"}}></img>Stationery</div>
                  <div className="col"><img src="https://img.icons8.com/color/480/000000/clothes.png" alt="..." style={{height:"120px",width:"120px"}}></img>Clothes</div>
                  <div className="col"><img src="https://img.icons8.com/color/480/000000/food.png" alt="..." style={{height:"120px",width:"120px"}}></img>Food</div>
                </div>
                </div>
              </div>
                 <br/>
              <h5 className="card-header"  style={{backgroundColor:"#92DAF1"}}>Deals of the Day</h5> 
              <br/>
              <Filter count={this.state.filteredProducts && this.state.filteredProducts.length} handleSortChange={this.handleSortChange}
              handleSizeChange={this.handleSizeChange} />        
                  
                  <div className="row" style={{marginTop: "20px"}}>
                      {data.map(product=>{ return (
              <div key={product.title} className="col-md-3 col-sm-6">
                  <div className="product-grid4">
                  <div className="product-image4">
                      <a href="javasript:;" onClick={() => this.props.history.push(`product/${product.id}/`)}>
                          <img className="pic-1" src={product.imageurl1} alt="#"></img>
                          <img className="pic-2" src={product.imageurl2} alt="#"></img>
                      </a>
                      <ul className="social">
                          <li><a href="javasript:;" onClick={() => this.props.history.push(`product/${product.id}/`)} producta-tip="Quick View"><i className="fa fa-eye"></i></a></li>
                          <li><a href="/login" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a></li>
                          <li><a href="/login" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                      </ul>
                      <span className="product-new-label">New</span>
                      <span className="product-discount-label">{product.discount_price}%</span>
                  </div>
                  <div className="product-content">
                      <h3 className="title"><a href="/login">{product.title}</a></h3>
                      <div className="price">
                      $ {product.price} &nbsp;
                          <span>20.00</span>
                      </div>
                      
                      <button className="add-to-cart" onClick={(e)=>{if(window.confirm('Your item has been added to Cart')){this.handleAddToCart(e, product)}}}>ADD TO CART</button>
                  
                  </div>
                  </div>
              </div> 
                      )})}  
              </div>
              </div>
            </div>
        )
    }
}


export default Header;

