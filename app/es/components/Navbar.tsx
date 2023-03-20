import "./index.css";

export function NavbarIndex() {
  return (
    <div>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 ">
          <a
            href="/"
            className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
          >
            <img
              src="https://scontent.fbga1-4.fna.fbcdn.net/v/t39.30808-6/334018515_3413401262311897_8863148242789559263_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH-uHtZdDhduyCugU7e5x9a5dXSoUgEvE_l1dKhSAS8T7JW4t97NpT9k11RhQAFEGr3EUqgKfO507aPHVQwSYdk&_nc_ohc=iNoZQt0D818AX-USZ1Y&_nc_ht=scontent.fbga1-4.fna&oh=00_AfAHIoaUdE3Jgc5y3-p6PtjzLXjFfLOspiczjgWSZFp6Jw&oe=641AF8B6"
              alt=""
              id="Logo"
            />
          </a>

          {/* <ul classNameName="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" classNameName="nav-link px-2 link-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="#" classNameName="nav-link px-2 link-dark">
                Features
              </a>
            </li>
            <li>
              <a href="#" classNameName="nav-link px-2 link-dark">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" classNameName="nav-link px-2 link-dark">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" classNameName="nav-link px-2 link-dark">
                About
              </a>
            </li>
          </ul> */}
          <div className="dropdown">
            <a
              className="btn btn-primary dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Seleccionar Lenguaje
            </a>

            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/es">
                  Español/Spanish
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  English/Ingles
                </a>
              </li>
            </ul>
          </div>

          {/* <div classNameName="col-md-3 text-end">
            <button type="button" classNameName="btn btn-outline-primary me-2">
              Login
            </button>
            <button type="button" classNameName="btn btn-primary">
              Sign-up
            </button>
          </div> */}
        </header>
      </div>
    </div>
  );
}
