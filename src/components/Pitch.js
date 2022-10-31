import React from 'react'

function Pitch() {
  return (
    <>
        <div className='row'>
            <div className='col-sm-9'>
                <h5>Deck</h5>
            </div>
            <div className='col-sm-3'>
                <a class="btn btn-primary btn-sm" href="#" role="button" style={{marginLeft:"0px"}}>Download Pitch Deck</a>
            </div>
        </div>
        <hr></hr>

        <div className='row'>
            <h6>10 Seconds Pitch</h6>
            <small>Online search, compare & booking platform for self-drive cars, charter flights, living space & more that rewards users
</small>
        </div>
        <hr></hr>

        <div className='row'>
            <h6>Deck Info</h6>
            <h2>LetzRent</h2>
        </div>

        <hr></hr>

        <div className='row'>
            <h5><b>Highlights</b></h5>
            <ul style={{marginLeft:"20px"}}>
                <li><small>Running profitable pilot in Bengaluru.</small></li>
                <li><small>20k+ registered users, 4.2 app rating and 10k+ social media following.</small></li>
                <li><small>Company is projecting 100cr+ transaction volume in 5 years.</small></li>
                <li><small>Founder with the marketing expertise of 17+ years in Reliance, Naaptol, Tv9 and Zee and more.</small></li>
                <li><small>GenZ CTO and co-founder.</small></li>
                <li><small>Expansion is easy and the untapped customer base is huge.</small></li>
                <li><small>Been in news articles, already making buzz.</small></li>
            </ul>
        </div>
        <hr></hr>

        <div className='row'>
            <h5><b>Traction</b></h5>
            <img src="E:\Projects\React_Project\peppercorn\letzrent\src\components\traction.png" style={{backgroundColor:"#edf1f"}} ></img>
        </div>




        
    </>
    
  )
}

export default Pitch