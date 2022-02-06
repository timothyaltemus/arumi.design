import { Link } from 'react-router-dom';

const SmallContact = () => {
  return (
    <div id="get-in-touch" className="colorlib-bg-color">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 animate-box"
<<<<<<< HEAD
            data-animate-effect="fadeInLeft">
=======
            data-animate-effect="fadeInLeft"
          >
>>>>>>> main
            <h2>Get in Touch!</h2>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
<<<<<<< HEAD
            data-animate-effect="fadeInLeft">
=======
            data-animate-effect="fadeInLeft"
          >
>>>>>>> main
            <p className="colorlib-lead">
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean.
            </p>
            <p>
              <Link to="/contact" className="btn btn-primary btn-learn">
                Contact me!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallContact;
