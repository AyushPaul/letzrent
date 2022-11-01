import React from 'react'

function Comments() {
  return (
    <>
        <div className='row'>
            <div className='col-sm-10'></div>
            <div className='col-sm-2'>
                <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Comment</button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content p-2">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">New Comment</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-2">
                        <textarea placeholder='Add Comment' style={{width:"100%" , padding:"10px"}}></textarea>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" disabled>Post</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div className='row'>
            <div class="card m-3" style={{backgroundColor:"#edf1f5"}}>
                    <div class="card-body">
                        <div className='row'>
                            <div className='col-sm-9'>
                                <p><img src="https://cdn-icons-png.flaticon.com/512/4442/4442475.png" style={{width:"25px"}}></img><b> Omkar Darde</b></p>
                            </div>
                            <div className='col-sm-3'>
                                <p>2022-09-24 14:49:02</p>
                            </div>
                        </div>
                        <div className='row'>
                            <p>fvfvffgvbfvgfvbgfvbbvevgbgvfbegvbevgbegvbevvbegvbegvbgebvgbevgbegvbgevbgbefvfbevgvebvgfbvfe</p>
                        </div>
                        <div className='row'>
                            <div className='col-sm-10'></div>
                            <div className='col-sm-2'>
                                <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Reply</button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

        <div className='row'>
            <div class="card m-3" style={{backgroundColor:"#edf1f5"}}>
                    <div class="card-body">
                        <div className='row'>
                            <div className='col-sm-9'>
                                <p><img src="https://cdn-icons-png.flaticon.com/512/4442/4442475.png" style={{width:"25px"}}></img><b> Palash</b></p>
                            </div>
                            <div className='col-sm-3'>
                                <p>2022-08-28 06:54:14</p>
                            </div>
                        </div>
                        <div className='row'>
                            <p>tyyyfgh</p>
                        </div>
                        <div className='row'>
                            <div className='col-sm-10'></div>
                            <div className='col-sm-2'>
                                <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Reply</button>
                            </div>
                        </div>
                        <hr></hr>
                        <div className='row'>
                            <small>Replies (1) Found</small>
                        </div>

                        <div className='row m-3'>
                            <div className='col-sm-1'>
                                <img src="https://cdn-icons-png.flaticon.com/512/566/566012.png" style={{width:"20px"}}></img>
                            </div>
                            <div className='col-sm-6'>
                                <p><b>Omkar Darde</b></p>
                            </div>
                            <div className='col-sm-4'>
                                <p>2022-09-24 14:45:52</p>
                            </div>
                        </div>
                        <div className='row' style={{marginTop:"-15px"}}>
                            <div className='col-sm-1'></div>
                            <div className='col-sm-6' style={{marginLeft:"23px"}}>
                                <p>fdvefvefv</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

        <div className='row'>
            <div class="card" style={{backgroundColor:"#edf1f5"}}>
                <div class="card-body">
                    <div className='row'>
                        <div className='col-sm-9'></div>
                        <div className='col-sm-3'>
                            <div className='row'>
                                <div class="col-sm-2 m-2"><button href="/" class="btn" disabled  style={{textDecoration:"none" , borderRadius:"50%"}}><img src='https://cdn-icons-png.flaticon.com/512/2985/2985161.png' width={20}></img></button></div>
                                <div class="col-sm-2 m-2"><button href="/" class="btn"  style={{textDecoration:"none", borderRadius:"50%" , backgroundColor:"#5e72e4" , marginLeft:"5px"}}>1</button></div>
                                <div class="col-sm-2 m-2"><button href="/" class="btn" disabled  style={{textDecoration:"none", borderRadius:"50%"}}><img src='https://cdn-icons-png.flaticon.com/512/2989/2989988.png' width={20}></img></button></div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Comments