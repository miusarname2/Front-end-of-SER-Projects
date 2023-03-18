export function Publicaciones() {
  return (
    <div>
      <main>
        <h1>A new one has arrived way of learning</h1>
        <p className="fs-5 col-md-8">
          We are a Training and Employment Center for software developers, the
          best and most integrated in Latin America. Our technology-based
          program is completely free and has been created by GBP and Startups in
          Latin America and the USA.
          <br />
          <br />
          Our intensive rapid learning model guarantees that in a maximum of 8
          months the necessary knowledge to join a work team with one of our
          Allies is consolidated, involving Software Skills, English and
          abilities of the Being
        </p>

        <hr className="col-3 col-md-2 mb-5" />

        <div className="row g-5">
          <div className="col-md-6">
            <h2>Our center deformation</h2>
            <p>
              We have created the best facilities in Colombia in Zona Franca
              Santander, Edificio Zenith Piso 6, located in the ring road. Where
              we have high-capacity gamer teams, innovative learning sites and
              spaces for fun and integration.
            </p>
            <div className="mb-5">
              <a
                href="https://www.google.com/maps/dir//Zona+Franca+Santander,+Km+4,+Anillo+Vial,+Bucaramanga,+Santander/@7.0614372,-73.1609805,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x8e683f18ef59f9a1:0xffbf118f3e8f20c!2m2!1d-73.1260003!2d7.0614393!3e0?hl=es"
                className="btn btn-primary btn-lg px-4"
              >
                I want to know how to get there
              </a>
            </div>
          </div>

          <div className="col-md-6">
            <h2>What do you need to be a Camper ?</h2>
            <ul>
              <li>
                You must be <strong>available for 8 hours in person </strong> at
                our facilities from Monday to Friday.
              </li>
              <li>
                Preferably you must be between{" "}
                <strong>19 and 26 years old </strong>
              </li>
              <li>
                The most important thing is commitment, dedication and passion
                for development. If you want to be in CAMPUS you must put all
                your Discipline and Effort during the program.
                <strong>
                  {" "}
                  And this is not a phrase from the drawer, nor is it optional,
                  whoever does not have it will not be able to advance in the
                  program.
                </strong>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
