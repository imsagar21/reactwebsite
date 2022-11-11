function Footing() {
  return (
    <footer>
      <div class="container my-5">
        <div class="row">
          <div class="col-md-3 text-center">
            <img src="images/Digitallynnc logo.png" alt="" />
            <p class="mb-3">Follow us on</p>
            <div class="inline-block">
                <i class="fa-brands fa-facebook-f mx-3"></i>
                <i class="fa-brands fa-twitter mx-3"></i>
                <i class="fa-brands fa-linkedin-in mx-3"></i>
                <i class="fa-brands fa-instagram mx-3"></i>
            </div>
          </div>
          <div class="col-md-3 my-3">
            <h4>Digital Lync</h4>
            <p class="text-secondary">Career Support</p>
            <p class="d-inline-block border border-1 text-secondary ">
              Online Pay
            </p>
          </div>
          <div class="col-md-3">
            <h4>Courses</h4>
            <ul class="list-group borderless">
              <li class="list-group-item">Full Stack Development</li>
              <li class="list-group-item">AWS</li>
              <li class="list-group-item">Python</li>
              <li class="list-group-item">DevOps</li>
              <li class="list-group-item">Angular</li>
              <li class="list-group-item">React Js</li>
            </ul>
          </div>
          <div class="col-md-3">
            <h4>Programs</h4>
            <ul class="list-group borderless">
              <li class="list-group-item">
                <p>Job ready Program</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="copyright">
        <div class="container text-center">
          {" "}
          © Copyright Lync Digital School Pvt. Ltd | 2019 |
          <a href="privacy-policy.html"> Privacy Policy</a>{" "}
        </div>
      </div>
    </footer>
  );
}

export default Footing;
