const AboutMePanel = () => {
  return (
    <div className="fancy-collapse-panel">
      <div
        className="panel-group"
        id="accordion"
        role="tablist"
        aria-multiselectable="true">
        <div className="panel panel-default">
          <div className="panel-heading" role="tab" id="headingOne">
            <h4 className="panel-title">
              <a
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne">
                Why choose me?
              </a>
            </h4>
          </div>
          <div
            id="collapseOne"
            className="panel-collapse collapse in"
            role="tabpanel"
            aria-labelledby="headingOne">
            <div className="panel-body">
              <div className="row">
                <div className="col-md-6">
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.{' '}
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics, a large language ocean.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading" role="tab" id="headingTwo">
            <h4 className="panel-title">
              <a
                className="collapsed"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo">
                What I do?
              </a>
            </h4>
          </div>
          <div
            id="collapseTwo"
            className="panel-collapse collapse"
            role="tabpanel"
            aria-labelledby="headingTwo">
            <div className="panel-body">
              <p>
                Far far away, behind the word <strong>mountains</strong>, far
                from the countries Vokalia and Consonantia, there live the blind
                texts. Separated they live in Bookmarksgrove right at the coast
                of the Semantics, a large language ocean.
              </p>
              <ul>
                <li>Separated they live in Bookmarksgrove right</li>
                <li>Separated they live in Bookmarksgrove right</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading" role="tab" id="headingThree">
            <h4 className="panel-title">
              <a
                className="collapsed"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree">
                My Specialties
              </a>
            </h4>
          </div>
          <div
            id="collapseThree"
            className="panel-collapse collapse"
            role="tabpanel"
            aria-labelledby="headingThree">
            <div className="panel-body">
              <p>
                Far far away, behind the word <strong>mountains</strong>, far
                from the countries Vokalia and Consonantia, there live the blind
                texts. Separated they live in Bookmarksgrove right at the coast
                of the Semantics, a large language ocean.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePanel;
