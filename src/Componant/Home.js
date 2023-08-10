import React from "react";

const Home = () => {
  return (  
    <>
    <section className="home_heading">
      <div className="container home">
        <div className="row">
          <div className="col-md-6">
          <img className="rounded mx-auto d-block" src="https://img.freepik.com/free-vector/world-map-isolated_98292-4295.jpg?w=400" alt="/"/>
          </div>
          <div className="col-md-6">
          <h1>GET CONNECTED<br/>The right way - toll<br/>Free number</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and <br/>
          typesetting industry Lorem Ipsum has been the industry's<br/>
           standard dummy text text industry </p>
           <button type="button" className="btn btn-outline-dark mt-3 px-3">
           CONTACT US NOW
         </button>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Home;
