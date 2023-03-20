export function Hero(props:any) {
  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={props.image}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
              style={{ borderRadius: "10px", boxShadow: "0 0 10px #ccc" }}
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Welcome to your "Trainer" profile, what do you want to do?...
            </h1>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
