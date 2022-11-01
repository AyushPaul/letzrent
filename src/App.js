import Navbar from './components/Navbar';
import logo from './logo.svg';
import './App.css';
import Alerts from './components/Alerts';
import React , {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";
import Pitch from './components/Pitch';
import Details from './components/Details';
import Comments from './components/Comments';

function App() {

  const [alert, setalert] = useState(null)
  const showAlert = () =>{
    setalert({
      msg:"Please login to add to favorites."
    })

    setTimeout(() => {
      setalert(null)
      
    }, 1500);
  }
  const handleAlert = () => {
    alert("Plz Login")
  }
  return (
    <>
    <Router>
    <Navbar></Navbar>
    <Alerts alert={alert}></Alerts>
    <div className='container p-4'>
      <div className='row'>
        <div className='col-sm-1 py-4 my-5 px-4'>
          <img id='logo' src='https://api.pepcorns.com/clientassets/icon1651230435196.png' width={100} height={100} style={{borderRadius:"50%"}}></img>
        </div>
        <div className='col-sm-6 py-4 my-3 mx-4' style={{textAlign:"left" , lineHeight:"1"}}>
          <a href="https://app.pepcorns.com/" style={{textDecoration:"none",color:"black"}}><h1>Letzrent</h1></a>
          
          <p>Address : Mumbai Maharashtra</p>
          <p>EMAIL : | Website : https://letzrent.com | PAN/TAN : AAJCR3294F</p>
          <p style={{size:"5px" , paddingTop:"0px"}}>Online search, compare & booking platform for self-drive cars, charter flights, living space & more that rewards users</p>
          <button type="button" class="btn btn-danger btn-sm mx-2" disabled>GEN Z FOUNDER</button>
          <button type="button" class="btn btn-primary btn-sm mx-2" disabled>MOBILITY</button>
          <button type="button" class="btn btn-success btn-sm mx-2" disabled>E-COMMERCE</button>
        </div>
        <div className='col-sm-3 py-4 my-3 mx-4' style={{boxShadow:"initial"}}>
        <div class="card" style={{width:"18rem" ,backgroundColor:"#edf1f5"}}>
          <div class="card-body" style={{backgroundColor:"#edf1f5"}}>
            <h5 class="card-title" style={{backgroundColor:"#edf1f5"}}>Useful Links</h5>
            <hr></hr>
            <a href="/" class="card-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{backgroundColor:"#edf1f5" , textDecoration:"none"}}><img src='https://cdn-icons-png.flaticon.com/512/3925/3925158.png' width={10}></img> Share</a>
            <br></br>
          
            <button type="button" onClick={showAlert} class="btn btn-link shadow-none outline-none p-0" style={{textDecoration:"none"}}><img src='https://cdn-icons-png.flaticon.com/512/8777/8777887.png' width={10}></img> Follow</button>
            

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Share !</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="row m-2">
                      <div class="col-sm-2"><a href="/" class="card-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{textDecoration:"none"}}><img src='https://cdn-icons-png.flaticon.com/512/145/145802.png' width={30}></img></a></div>
                      <div class="col-sm-2"><a href="/" class="card-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{textDecoration:"none"}}><img src='https://cdn-icons-png.flaticon.com/512/3670/3670151.png' width={30}></img></a></div>
                      <div class="col-sm-2"><a href="/" class="card-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{textDecoration:"none"}}><img src='https://cdn-icons-png.flaticon.com/512/145/145808.png' width={30}></img></a></div>
                      <div class="col-sm-2"><a href="/" class="card-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{textDecoration:"none"}}><img src='https://cdn-icons-png.flaticon.com/512/3955/3955024.png' width={30}></img></a></div>
                      <div class="col-sm-2"><a href="/" class="card-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{textDecoration:"none"}}><img src='https://cdn-icons-png.flaticon.com/512/3670/3670147.png' width={30}></img></a></div>
                      <div class="col-sm-2"><a href="/" class="card-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{textDecoration:"none"}}><img src='https://cdn-icons-png.flaticon.com/512/179/179326.png' width={30}></img></a></div>
                    </div>
                    
                    <hr></hr>
                    <textarea className="form-control" value={'https://api.pepcorns.com//founders/#!/campdetails/10'} style={{marginTop:"30px"}} ></textarea>
                   
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

      </div>
      <div className='row'>
        <div className='col-sm-7 my-3 py-2 px-4' >
          <a href='https://www.youtube.com/watch?v=biGcDeB2PbQ' style={{marginBottom:"200px" , textDecoration:"none" , color:"black"}}>Unable to view video ? Click here</a>
        <iframe width="100%" height="390" src="https://www.youtube.com/embed/biGcDeB2PbQ" title="LetzRent for Pepcorns | Making renting simple, affordable and rewarding." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className='col-sm-5 my-3 py-2'>
        <div class="card" style={{marginLeft:"70px",width:"18rem" ,backgroundColor:"#edf1f5" , padding:"5px"}}>
        <div class="card-body" style={{backgroundColor:"#edf1f5"}}>
          <h1 class="card-title" style={{backgroundColor:"#edf1f5" , color:"#5e72e4"}}>₹ 0</h1>
          <small>0 % of minimum goal raised</small>
          <hr></hr>
          <h2 class="card-title" style={{backgroundColor:"#edf1f5" , color:"#5e72e4"}}>0</h2>
          <small>Total Investors</small>
          <hr></hr>
          <h2 class="card-title" style={{backgroundColor:"#edf1f5" , color:"#5e72e4"}}>0 Days</h2>
          <small>Left to Invest</small>
          <hr></hr>
          <div class="d-grid gap-2">
            <button class="btn btn-danger" type="button"><img src='https://cdn-icons-png.flaticon.com/512/3358/3358623.png' width={20}></img> Campaign Expired</button>
            <small style={{textAlign:"center"}}>₹ 1000 Minimum Investment</small>
          </div>
          
        </div>
        </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-sm-8'>
        <Link to="/pitch"><button type="button" class="btn btn-primary my-2 px-4 mx-5" style={{backgroundColor:"#5e72e4" , boxShadow:"20px black"}}>Pitch</button></Link>
        <Link to="/details"><button type="button" class="btn btn-primary my-2 px-4 mx-4" style={{backgroundColor:"#5e72e4" , boxShadow:"20px black"}}>Details</button></Link>
        <Link to="/updates"><button type="button" class="btn btn-primary my-2 px-4 mx-5" style={{backgroundColor:"#5e72e4" , boxShadow:"20px black"}}>Updates</button></Link>
        <Link to="/comments"><button type="button" class="btn btn-primary my-2 px-4 mx-4" style={{backgroundColor:"#5e72e4" , boxShadow:"20px black"}}>Comments (2)</button></Link>
        </div>
       <div className='col-sm-4' style={{marginLeft:"-25px"}}>
          <h1>Deal Terms</h1>
          <small>Perks you will receive for Investing Letzrent</small>
       </div>
      </div>

      <div className='row'>
        <div className='col-sm-7 my-3'>
          
            <Switch>
              <Route exact path="/" element = {<div class="card" style={{width:"100%" ,backgroundColor:"#edf1f5" , padding:"5px" ,marginTop:"0px"}}>
                <div class="card-body" style={{backgroundColor:"#edf1f5"}}>
                 <Pitch></Pitch>
                </div>
              </div>}>
              </Route>
              <Route exact path="/pitch" element = {<div class="card" style={{width:"100%" ,backgroundColor:"#edf1f5" , padding:"5px" ,marginTop:"0px"}}>
                <div class="card-body" style={{backgroundColor:"#edf1f5"}}>
                 <Pitch></Pitch>
                </div>
              </div>}>
              </Route>
              <Route exact path="/details" element = {<>
              <Details></Details></>}>
              </Route>

              <Route exact path="/updates" element = {<div class="card" style={{width:"100%" ,backgroundColor:"#edf1f5" , padding:"5px" ,marginTop:"0px"}}>
                <div class="card-body" style={{backgroundColor:"#edf1f5"}}>
                 <hr></hr>
                </div>
              </div>}>
              </Route>
              <Route exact path="/comments" element = {<>
              <Comments></Comments></>}>
              </Route>
              
            </Switch>
          
        </div>

        <div className='col-sm-5 my-3'>
        <div class="card" style={{marginLeft:"70px",width:"18rem" ,backgroundColor:"#edf1f5" , padding:"5px" ,marginTop:"15px"}}>
          <div class="card-body" style={{backgroundColor:"#edf1f5"}}>
            <h1 class="card-title" style={{backgroundColor:"#edf1f5" , color:"#5e72e4"}}>₹ 2000</h1>
            <small>Invest</small>
            <hr></hr>
            <small>• LetzRent Premium Apparel (T-shirts & Coffee Mug) • Early access to new features & promotions</small>
            <hr></hr>
            <small>• TNC : Limited to the first 100</small>
            <div class="d-grid gap-2">
              <button class="btn btn-primary" type="button" disabled style={{backgroundColor:"#5e72e4" , marginTop:"20px" , padding:"5px"}}>Invest</button>
            </div>
          </div>
        </div>
        <div class="card" style={{marginLeft:"70px",width:"18rem" ,backgroundColor:"#edf1f5" , padding:"5px",marginTop:"15px"}}>
          <div class="card-body" style={{backgroundColor:"#edf1f5"}}>
            <h1 class="card-title" style={{backgroundColor:"#edf1f5" , color:"#5e72e4"}}>₹ 5000</h1>
            <small>Invest</small>
            <hr></hr>
            <small>• LetzRent Premium Apparel Box  (T-shirts, Sweatshirts & additional Swag)</small>
            <br></br>
            <small>• Early access to new features & promotions</small>
            <hr></hr>
            <small>• TNC : Limited to the first 200</small>
            <div class="d-grid gap-2">
              <button class="btn btn-primary" type="button" disabled style={{backgroundColor:"#5e72e4" , marginTop:"20px" , padding:"5px"}}>Invest</button>
            </div>
          </div>
        </div>
        <div class="card" style={{marginLeft:"70px",width:"18rem" ,backgroundColor:"#edf1f5" , padding:"5px",marginTop:"15px"}}>
          <div class="card-body" style={{backgroundColor:"#edf1f5"}}>
            <h1 class="card-title" style={{backgroundColor:"#edf1f5" , color:"#5e72e4"}}>₹ 10000</h1>
            <small>Invest</small>
            <hr></hr>
            <small>• Exclusive interest in owning equity with an investment of ₹50,000 — ₹2,00,000</small>
            <br></br>
            <small> • Invite to exclusive LetzRent team chat</small>
            <br></br>
            <small>• LetzRent Premium Apparel Box  (T-shirts, Sweatshirts & additional Swag)</small>
            <br></br>
            <small>• Early access to new features & promotions</small>
            <hr></hr>
            <small>• TNC : Equity benefits with no voting rights. Limited to the first 5 investors.</small>
            <div class="d-grid gap-2">
              <button class="btn btn-primary" type="button" disabled style={{backgroundColor:"#5e72e4" , marginTop:"20px" , padding:"5px"}}>Invest</button>
            </div>
          </div>
        </div>
        <div class="card" style={{marginLeft:"70px",width:"18rem" ,backgroundColor:"#edf1f5" , padding:"5px",marginTop:"15px"}}>
          <div class="card-body" style={{backgroundColor:"#edf1f5"}}>
            <h1 class="card-title" style={{backgroundColor:"#edf1f5" , color:"#5e72e4"}}>₹ 25000</h1>
            <small>Invest</small>
            <hr></hr>
            <small>• Exclusive interest in owning equity with an investment of ₹3,00,000 — ₹10,00,000 </small>
            <br></br>
            <small>• One-on-one 30 minute video call with Co-Founders</small>
            <br></br>
            <small> • Invite to exclusive LetzRent team chat</small>
            <br></br>
            <small>• LetzRent Premium Apparel Box  (T-shirts, Sweatshirts & additional Swag)</small>
            <br></br>
            <small>• Early access to new features & promotions</small>
            <hr></hr>
            <small>• TNC : Equity benefits with no voting rights. Limited to the first 5 investors.</small>
            <div class="d-grid gap-2">
              <button class="btn btn-primary" type="button" disabled style={{backgroundColor:"#5e72e4" , marginTop:"20px" , padding:"5px"}}>Invest</button>
            </div>
          </div>
        </div>
        <div class="card" style={{marginLeft:"70px",width:"18rem" ,backgroundColor:"#edf1f5" , padding:"5px",marginTop:"15px"}}>
          <div class="card-body" style={{backgroundColor:"#edf1f5"}}>
            <h1 class="card-title" style={{backgroundColor:"#edf1f5" , color:"#5e72e4"}}>₹ 50000</h1>
            <small>Invest</small>
            <hr></hr>
            <small>• Exclusive interest in owning equity with an investment of ₹11,00,000 — ₹30,00,000  </small>
            <br></br>
            <small>• In-Person dinner with Co-Founder in Whitefield, Bangalore</small>
            <br></br>
            <small>• One-on-one 30 minute video call with Co-Founders</small>
            <br></br>
            <small> • Invite to exclusive LetzRent team chat</small>
            <br></br>
            <small>• LetzRent Premium Apparel Box  (T-shirts, Sweatshirts & additional Swag)</small>
            <br></br>
            <small>• Early access to new features & promotions</small>
            <hr></hr>
            <small>• TNC : Equity benefits with voting rights. Limited to the first 5 investors.</small>
            <div class="d-grid gap-2">
              <button class="btn btn-primary" type="button" disabled style={{backgroundColor:"#5e72e4" , marginTop:"20px" , padding:"5px"}}>Invest</button>
            </div>
          </div>
        </div>
        <div class="card" style={{marginLeft:"70px",width:"18rem" ,backgroundColor:"#edf1f5" , padding:"5px",marginTop:"15px"}}>
          <div class="card-body" style={{backgroundColor:"#edf1f5"}}>
            <h1 class="card-title" style={{backgroundColor:"#edf1f5" , color:"#5e72e4"}}>₹ 100000</h1>
            <small>Invest</small>
            <hr></hr>
            <small>• Exclusive interest in owning equity with an investment of above  ₹40,00,000  </small>
            <br></br>
            <small>• LetzRent Weekend Experience: Flight & Hotel on us</small>
            <br></br>
            <small>• In-Person dinner with Co-Founder in Whitefield, Bangalore</small>
            <br></br>
            <small>• One-on-one 30 minute video call with Co-Founders</small>
            <br></br>
            <small> • Invite to exclusive LetzRent team chat</small>
            <br></br>
            <small>• LetzRent Premium Apparel Box  (T-shirts, Sweatshirts & additional Swag)</small>
            <br></br>
            <small>• Early access to new features & promotions</small>
            <hr></hr>
            <small>• TNC : Equity benefits with voting rights(open for discussion of term sheet). Limited to the first 2 investors.</small>
            <div class="d-grid gap-2">
              <button class="btn btn-primary" type="button" disabled style={{backgroundColor:"#5e72e4" , marginTop:"20px" , padding:"5px"}}>Invest</button>
            </div>
          </div>
        </div>
        </div>
      </div>

    </div>
    </Router>
    </>
    
  );
}

export default App;
