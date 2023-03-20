export function Publicaciones() {
  return (
    <div>
      <main>
        <h1>Ha llegado una nueva forma de aprender</h1>
        <p className="fs-5 col-md-8">
          Somos un Centro de Formación y Empleo para desarrolladores de
          software, el mejor y con mayor integración en Latinoamérica. Nuestro
          programa de base tecnológica es totalmente Gratuito y ha sido creado
          por GBP y Startups en Latinoamérica y USA.
          <br />
          <br />
          Nuestro modelo intensivo de aprendizaje rápido, garantiza que en un
          máximo de 8 meses se afiance el conocimiento necesario para unirse a
          un equipo de trabajo con alguno de nuestros Aliados, involucrando
          Software Skills, Inglés y habilidades del Ser.
        </p>

        <hr className="col-3 col-md-2 mb-5" />

        <div className="row g-5">
          <div className="col-md-6">
            <h2>Nuestro centro de formación</h2>
            <p>
              Hemos creado las mejores instalaciones de Colombia en Zona Franca
              Santander, Edificio Zenith Piso 6, ubicada en el anillo vial. En
              donde contamos con equipos gamer de alta capacidad, sitios
              novedosos de aprendizaje y espacios de diversión e integración.
            </p>
            <div className="mb-5">
              <a
                href="https://www.google.com/maps/dir//Zona+Franca+Santander,+Km+4,+Anillo+Vial,+Bucaramanga,+Santander/@7.0614372,-73.1609805,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x8e683f18ef59f9a1:0xffbf118f3e8f20c!2m2!1d-73.1260003!2d7.0614393!3e0?hl=es"
                className="btn btn-primary btn-lg px-4"
              >
                Quiero saber como llegar
              </a>
            </div>
          </div>

          <div className="col-md-6">
            <h2>¿Qué requieres para ser un Camper ?</h2>
            <ul>
              <li>
                Debes tener{" "}
                <strong>disponibilidad de 8 horas presenciales </strong> aen
                nuestras instalaciones de lunes a viernes.
              </li>
              <li>
                Preferiblemente debes tener entre{" "}
                <strong>19 y 26 años. </strong>
              </li>
              <li>
                Lo más importante es el compromiso, la dedicación y la pasión
                por el desarrollo. Si quieres estar en CAMPUS debes poner toda
                tu Disciplina y Esfuerzo durante el programa.
                <strong>
                  {" "}
                  Y esto no es frase de cajón, tampoco opcional, quien no lo
                  tenga no podrá avanzar en el programa.
                </strong>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
