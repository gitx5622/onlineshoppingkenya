import React, { Component } from 'react'
import axios from 'axios';
import paypal from '../../images/paypal.png';
import Navbar from '../../containers/Navbar';
import {TabletDetailURL} from '../../constants';
import OwlCarousel from 'react-owl-carousel2';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Card } from 'antd';

const options = {
  items: 1,
  nav: true,
  rewind: true,
  loop:true,
  autoplay: true
};

const tabListNoTitle = [
  {
    key: 'Description',
    tab: 'Description',
  },
  {
    key: 'Specifications',
    tab: 'Specifications',
  },
  {
    key: 'Reviews',
    tab: 'Reviews',
  },
];

const contentListNoTitle = {
  Description: <p>article content</p>,
  Specifications: <p>app content</p>,
  Reviews: <p>project content</p>,
};

class Detailview extends Component {

  state = {
    data: [],
    noTitleKey: 'Description',
  };

  componentDidMount() {
    this.handleFetchItem();
  }

  handleFetchItem = () => {
    const {
      match: { params }
    } = this.props;
    axios
      .get(TabletDetailURL(params.productID))
      .then(res => {
        this.setState({ data: res.data });
      })
      
      
  };
  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };
    render() {
        const {data} = this.state;
        const item = data;
        return (
    <div>
          <Navbar/>
       
          <div className="row" style={{margin:"30px"}}>
            <div className="col-8">
            <div className="media">
        <OwlCarousel options={options} style={{width:350,height:150,marginRight:"20px",color:"blue"}}>
            <div><img src={item.imageurl1} style={{height:350, borderRadius:"5px",zIndex:-100}} className="align-self-start mr-3" alt="..."></img></div>
          
        </OwlCarousel>
        <div className="media-body">
        <h2 className="mt-0"><b>{item.title}</b></h2>
        <h3><b>Price:  $ {item.price} </b></h3>
        <p style={{whiteSpace:"pre-line"}}>{item.description}</p>
        </div>
        </div>
            </div>
            <div className="col-4">
            
              <h3><center>Order Summary</center></h3><hr/>
              <p>Sub Total:  </p>
              <p>Estmated Delivery : </p>
              <center>
              <button type="button" className=" btn-lg " style={{backgroundColor:'#16B41F',width:250,color:"#fff"}}>Checkout Securely</button>
              <button type="button" className="btn-lg " style={{backgroundColor:'gold',width:250,marginTop:'10px',borderRadius:'30px'}}>Checkout with PayPal</button>
              <br/>
              <img src={paypal} style={{width:'200px',height:'100px'}} alt="..."/>
              </center>
              <br/><br/>
              <div>
              <i class="fa fa-question-circle-o fa-2x" aria-hidden="true">&nbsp;Delivery</i>
              
              <hr/>
              <i class="fa fa-question-circle-o fa-2x" aria-hidden="true">&nbsp;Returns</i>
              
              <hr/>
              <br/>
              <center>
              <button type="button" className="btn-lg " style={{backgroundColor:'#EF420F ',width:250,marginTop:'10px',borderRadius:'30px'}}>Continue Shopping</button>
              </center>
              </div>
              </div>
             
          </div>
          <div className="container">
          <Card
          style={{ width: '100%',marginBottom:'50px' }}
          tabList={tabListNoTitle}
          activeTabKey={this.state.noTitleKey}
          tabBarExtraContent={<a href="/#">More</a>}
          onTabChange={key => {
            this.onTabChange(key, 'noTitleKey');
          }}
        >
          {contentListNoTitle[this.state.noTitleKey]}
        </Card>

</div>
</div>
        )
    }
}

export default Detailview;
