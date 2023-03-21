export function Hero() {
  return (
    <div>
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1">BE</h1>
            <p className="lead">
            In this subject we develop ourselves as individuals and as members of multiple work groups.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"></div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3"
              style={{maxHeight:"317px",maxWidth:"454px",borderRadius:"10px"}}
              src="https://images.pexels.com/photos/6578779/pexels-photo-6578779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt=""
              width="720"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
