import React from 'react'

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd"}}>
  <div class="container-fluid" style={{backgroundColor: "#e3f2fd"}}>
    <a class="navbar-brand" href="/" style={{backgroundColor: "#e3f2fd"}}>PepCorns</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{backgroundColor: "#e3f2fd"}}>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/" style={{backgroundColor: "#e3f2fd"}}>Dashboard</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}


