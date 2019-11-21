import React, { Component } from 'react'
import mpesa_logo from '../images/gateways.png'

class OrderDetails extends Component {
    render() {
        return (
            <div className="container" >
                 <div className="row" style={{marginTop:'50px'}}>
                    <div class="card-header" style={{backgroundColor:"#C3F5F4"}}>
                        Featured
                    </div> 
                   
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                        </table>
                        </div>
                    
                    
                    <div className="row" style={{marginTop:'70px'}}>
                    <div class="col-md-6">
                        <h3><strong>Accepted Methods of Payments</strong></h3>
                    <img src={mpesa_logo} style={{width:'100%', height:'80%'}} alt="logo"/>
                    </div>
                    <div class="col-md-6">
                    <button type="button" class="btn btn-success btn-lg btn-block">Pay Now with MPESA</button>
                     <h5><center>Pay securely using M-Pesa<br/>You will not be charged with transaction fees during payment.</center></h5>
                    <br/><br/>
                    <button type="button" class="btn btn-primary btn-lg btn-block">Pay Now with Paypal</button>
                     <h5><center>Pay securely using Paypal<br/>You will not be charged with transaction fees during payment.</center></h5>
                    </div>
                    </div>
            </div>
        )
    }
}

export default OrderDetails
