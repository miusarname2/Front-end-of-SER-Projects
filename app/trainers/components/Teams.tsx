export function Teams() {
  return (
    <div>
      {/* DIV 1 */}
      <div
        className="btn-group"
        role="group"
        aria-label="Basic example"
        style={{
          display: "flex",
          marginLeft: "50px",
          marginRight: "20px",
        }}
      >
        <a href="/trainers/s1" className="btn btn-primary" role="button" style={{ margin: "9px", borderRadius: "6px",maxHeight: "38px" }}> S1</a>
        <a href="/trainers/s2" className="btn btn-secondary" role="button" style={{ margin: "9px", borderRadius: "6px",maxHeight: "38px" }}> S2 </a>
        <a href="/trainers/s3" className="btn btn-success" role="button" style={{ margin: "9px", borderRadius: "6px",maxHeight: "38px" }}> S3 </a>
        <a href="/trainers/s4" className="btn btn-danger " role="button" style={{ margin: "9px", borderRadius: "6px",maxHeight: "38px" }}> S4 </a>
        <a href="/trainers/w1" className="btn btn-warning" role="button" style={{ margin: "9px", borderRadius: "6px",maxHeight: "38px" }}> W1 </a>
        <a href="/trainers/w2" className="btn btn-info" role="button" style={{ margin: "9px", borderRadius: "6px",maxHeight: "38px" }}> W2 </a>
      </div>

      {/* DIV 2 */}

      <div
        className="btn-group"
        role="group"
        aria-label="Basic example"
        style={{
          display: "flex",
          marginLeft: "50px",
          marginRight: "20px",
        }}
      >
        <a href="/trainer/w3" className="btn btn-info" role="button" style={{ margin: "9px", borderRadius: "6px",maxHeight: "38px" }}> W3</a>
        <a href="/trainer/w4" className="btn btn-warning" role="button" style={{ margin: "9px", borderRadius: "6px",maxHeight: "38px" }}> W4 </a>
        <a href="/trainer/c1" className="btn btn-danger" role="button" style={{ margin: "9px", borderRadius: "6px",maxHeight: "38px" }}> C1 </a>
        <a href="/trainer/c2" className="btn btn-success" role="button" style={{ margin: "9px", borderRadius: "6px",maxHeight: "38px" }}> C2 </a>
        <a href="/trainer/c3" className="btn btn-secondary" role="button" style={{ margin: "9px", borderRadius: "6px",maxHeight: "38px" }}> C3 </a>
        <a href="/trainer/c4" className="btn btn-primary" role="button" style={{ margin: "9px", borderRadius: "6px",maxHeight: "38px" }}> C4 </a>
      </div>
    </div>
  );
}
