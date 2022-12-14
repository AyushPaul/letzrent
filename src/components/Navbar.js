import React from 'react'

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd"}}>
  <div class="container-fluid" style={{backgroundColor: "#e3f2fd"}}>
    <a class="navbar-brand" href="https://pepcorns.com/" style={{backgroundColor: "#e3f2fd"}}>PepCorns</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{backgroundColor: "#e3f2fd"}}>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/" style={{backgroundColor: "#e3f2fd"}}>Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="https://app.pepcorns.com/#!/login">Login Now</a>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{marginLeft:"1050px"}}>
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style={{width:"25px"}}></img>
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style={{padding:"10px",marginLeft:"1050px"}}>
            <li style={{marginLeft:"17px"}}><small>Welcome !</small></li>
            <hr></hr>
            <li><a class="dropdown-item" target="_blank" href="https://app.pepcorns.com/">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}


