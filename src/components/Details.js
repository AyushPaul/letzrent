import React from 'react'

function Details() {
  return (
    <>
        <div className='row mx-1' style={{marginBottom:"20px"}}>
        <p>Meet our <b>strong and visionary</b> team members</p>
        </div>
        <hr></hr>
        <div className='row'>
            <div className='col-sm-2 mx-5'>
                <div class="card" style={{width:"250%",marginLeft:"25px",backgroundColor:"#edf1f5"}}>
                    <img src="https://api.pepcorns.com/clientassets/icon1651231237314.jpg" class="card-img-top" alt="..." style={{width:"100%"}}></img>
                    <div class="card-body" style={{textAlign:"center"}}>
                    <h5 class="card-title">Manish Pratik</h5>
                        <p class="card-text">CoFounder</p>
                        <div className='row m-4 p-1'>
                            <div className='col-sm-2 mx-2'><a href="/"><img src='https://cdn-icons-png.flaticon.com/512/145/145802.png' width={30}></img></a></div>
                            <div className='col-sm-2 mx-2'><a href="/"><img src='https://cdn-icons-png.flaticon.com/512/3670/3670151.png' width={30}></img></a></div>
                            <div className='col-sm-2 mx-2'><a href="https://www.linkedin.com/in/manishpratik/"><img src='https://cdn-icons-png.flaticon.com/512/145/145807.png' width={30}></img></a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-sm-2 mx-5'>
                <div class="card" style={{width:"250%",marginLeft:"125px",backgroundColor:"#edf1f5"}}>
                    <img src="https://api.pepcorns.com/clientassets/icon1651243119561.jpg" class="card-img-top" alt="..."></img>
                    <div class="card-body" style={{textAlign:"center"}}>
                        <h5 class="card-title">Gautam Menon</h5>
                        <p class="card-text">CoFounder</p>
                        <div className='row m-4 p-1'>
                            <div className='col-sm-2 mx-2'><a href="/"><img src='https://cdn-icons-png.flaticon.com/512/145/145802.png' width={30}></img></a></div>
                            <div className='col-sm-2 mx-2'><a href="/"><img src='https://cdn-icons-png.flaticon.com/512/3670/3670151.png' width={30}></img></a></div>
                            <div className='col-sm-2 mx-2'><a href="https://www.linkedin.com/in/gautam-menon-040379208"><img src='https://cdn-icons-png.flaticon.com/512/145/145807.png' width={30}></img></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr></hr>

        <div className='row'>
            <div class="card m-3" style={{backgroundColor:"#edf1f5"}}>
                <div class="card-body">
                How will we use funds : Sales & Marketing - 50% | Human Resource-30% | Technology -10% | OPEX-10%
                </div>
            </div>
        </div>

        <hr></hr>

        <div className='row'>
            <div className='col-sm-6'>
            <div class="card m-3" style={{backgroundColor:"#edf1f5"}}>
                    <div class="card-body">
                        <div className='row'>
                            <div className='col-sm-9'>
                                <h7>TARGET RAISE</h7>
                            </div>
                            <div className='col-sm-3'>
                                <img src="https://cdn-icons-png.flaticon.com/512/2936/2936758.png" style={{width:"30px"}}></img>
                            </div>
                        </div>
                        <div className='row'>
                            <h5>5000000</h5>
                        </div>
                        <div className='row' style={{marginTop:"5px"}}>
                            <div className='col-sm-1'>
                                <img src="https://cdn-icons-png.flaticon.com/512/3148/3148312.png" style={{width:"20px"}}></img>
                            </div>
                            <div className='col-sm-10'>
                                <small> 0% Raised So far</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-sm-6'>
                <div class="card m-3" style={{backgroundColor:"#edf1f5"}}>
                    <div class="card-body">
                        <div className='row'>
                            <div className='col-sm-9'>
                                <h7>Start Date</h7>
                            </div>
                            <div className='col-sm-3'>
                                <img src="https://cdn-icons-png.flaticon.com/512/3143/3143636.png" style={{width:"30px"}}></img>
                            </div>
                        </div>
                        <div className='row'>
                            <h5>2022-06-26 16:38:05</h5>
                        </div>
                        <div className='row' style={{marginTop:"5px"}}>
                            <div className='col-sm-1'>
                                <img src="https://cdn-icons-png.flaticon.com/512/3148/3148312.png" style={{width:"20px"}}></img>
                            </div>
                            <div className='col-sm-10'>
                                <small> Ends in 0 Days</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr></hr>

        <div className='row'>
            <div class="card m-3" style={{backgroundColor:"#edf1f5"}}>
                    <div class="card-body">
                        <h5>Frequently Asked Question [Found 3]</h5>
                        <br></br>
                        <small><b>What does your company do ?</b></small>
                        <br></br>
                        <small>LetzRent is an online search, compare & booking platform for self-drive car rental that rewards users for renting. We aggregate rental deals from multiple service providers and present them to users with prices, reviews & facts to make an informed decision. Currently running a pilot in Bangalore by aggregating Zoomcar, Avis, Mychoize & Wowcarz.</small>
                        <br></br><br></br>
                        <small><b>Where do you want to be in 5 years ?</b></small>
                        <br></br>
                        <small>Uber for Self Drive Car Rental</small>
                        <br></br><br></br>
                        <small><b>Why did you choose this idea, what's your biggest Obstacle?</b></small>
                        <br></br>
                        <small>Customers want low Prices: And to get low prices 85% of the consumers check at least 2 data points (Source: BCG Consumer Trends). In various sectors information-centred buying has been made more efficient by companies like MMT for Travel, Policy bazaar for Insurance, Myntra or Shopperstop for Lifestyle products. However, for rental products, there is no one & to fill this need and make the process efficient we launched Letzrent, hoping to have a first-mover advantage and dominate the market in t</small>
                        <br></br>
                    </div>
            </div>
        </div>



    </>
    

  )
}

export default Details