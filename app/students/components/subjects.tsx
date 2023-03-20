import "./subjects.module.css";

export function Subjects(props: any) {
  return (
    <div>
      <div
        className="card-group"
        style={{ marginTop: "20px", marginLeft: "20px", marginRight: "20px" }}
      >
        <a
          href="/students/skill"
          style={{
            color: "black",
            textDecoration: "None",
            padding: "20px",
            maxWidth: "450px",
            height: "450px",
          }}
        >
          <div className="card" style={{ height: "410px" }}>
            <img
              src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="card-img-top"
              style={{ maxHeight: "825px", maxWidth: "550px" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{props.title1}</h5>
              <p className="card-text">{props.description1}</p>
            </div>
          </div>
        </a>

        {/* Div 2 */}

        <a
          href="/students/english"
          style={{
            color: "black",
            textDecoration: "None",
            padding: "20px",
            maxWidth: "450px",
            height: "450px",
          }}
        >
          <div className="card" style={{ height: "410px" }}>
            <img
              src="https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{props.title2}</h5>
              <p className="card-text">{props.description2}</p>
            </div>
          </div>
        </a>
        {/* Div 3 */}
        <a
          href="/students/be"
          style={{
            color: "black",
            textDecoration: "None",
            padding: "20px",
            maxWidth: "450px",
            height: "450px",
          }}
        >
          <div className="card" style={{ height: "410px" }}>
            <img
              src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{props.title3}</h5>
              <p className="card-text">{props.description3}</p>
            </div>
          </div>
        </a>
        {/* Div 4 */}
        <a
          href="/students/review"
          style={{
            color: "black",
            textDecoration: "None",
            padding: "20px",
            maxWidth: "450px",
            height: "450px",
          }}
        >
          <div className="card" style={{ height: "410px" }}>
            <img
              src="https://images.pexels.com/photos/6804595/pexels-photo-6804595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{props.title4}</h5>
              <p className="card-text">{props.description4}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
