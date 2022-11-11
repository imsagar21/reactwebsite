

function CorporateTraining(){

    return(
        <section class="p-5">
          <div class="row">
            <div class="col-md-6">
              <h1 class="" style={{color: "rgb(66, 66, 186)"}}>Corporate Training</h1>
              <h5>We are just a call away</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores tempore ex odit voluptatibus cum suscipit facilis libero doloremque commodi. Ipsa sequi, ipsum iste qui consectetur illum est quasi. Quis, quidem.</p>
              <div class="btn-group btn-group-lg " role="group" aria-label="Large button group">
                <button type="button" class="btn btn-warning p-3 rounded-0">Submit Request </button>
                <span>
                  <button type="button" class="btn btn-warning p-3 rounded-0 " style={{borderLeft: "2px solid black;"}}><img src="images/send.png" alt=""/></button>
                </span>
              </div>
            </div>
            <div class="col-md-1">
            </div>
            <div class="col-md-5  d-flex align-items-center">
              <img src="images/corporate-training.png" class="img-fluid" alt=""/>
            </div>
          </div>
      </section>
    )
}

export default CorporateTraining;