"use client";

import { useEffect, useState } from "react";
import '../style.css'

export function Raiting() {
  let nota = 5;
  const [state, setState] = useState();

  function handleChange(e: any) {
    e.preventDefault();
    if (e.target.value == "{nota}") {
      console.log("ten");
      let nota1 = (nota * 10) / 5;
      nota = nota1;
      return nota;
    } else if (e.target.value == "{nota}0") {
      console.log("hundred");
      let nota2 = (nota * 100) / 5;
      nota = nota2;
      return nota;
    } else if (e.target.value == "5") {
      console.log("five");
      return nota;
    } else {
      console.log("nota");
      return nota;
    }
  }

  function fetchData() {
    return nota;
  }

  useEffect(() => {
    fetchData();
  }, [nota]);

  return (
    <div>
      <div
        className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white"
        /* style={{ width: "380px" }} */
      >
        <a
          style={{ cursor: "pointer" }}
          className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom"
        >
          <svg className="bi pe-none me-2" width="30" height="24">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <form onChange={handleChange}>
            {/* <select name="" id="">
              <option value="">Nota 1</option>
              <option value="">Nota 2</option>
              <option value="">Nota 3</option>
              <option value="">Nota 4</option>
            </select> */}
            {/* <select className="form-select" aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="{nota}">1-10</option>
              <option value="{nota}0">0-100</option>
              <option value="5">0-5</option>
            </select> */}
          </form>
        </a>
        <div className="list-group list-group-flush border-bottom scrollarea">
          <a
            data-bs-toggle="modal" data-bs-target="#exampleModal"
            className="list-group-item   py-3 lh-sm"
            aria-current="true"
            id="First"
            style={{ cursor: "pointer" }} 
          >
            <div className="d-flex w-100 align-items-center justify-content-between"  >
              <strong className="mb-1">Oscar M Alvarez G </strong>
              <small>{nota}</small>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Do you want to change the note?</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <input type="text" value={nota} />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
          </a>
          <a
            style={{ cursor: "pointer" }}
            className="list-group-item list-group-item-action py-3 lh-sm"
          >
            <div className="d-flex w-{nota}0 align-items-center justify-content-between">
              <strong className="mb-1">Lucas Herrera</strong>
              <small className="text-muted">{nota}</small>
            </div>
          </a>
          <a
            style={{ cursor: "pointer" }}
            className="list-group-item list-group-item-action py-3 lh-sm"
          >
            <div className="d-flex w-{nota}0 align-items-center justify-content-between">
              <strong className="mb-1">Hermenegildo  </strong>
              <small className="text-muted">{nota}</small>
            </div>
          </a>

          <a
            style={{ cursor: "pointer" }}
            className="list-group-item list-group-item-action py-3 lh-sm"
            aria-current="true"
          >
            <div className="d-flex w-{nota}0 align-items-center justify-content-between">
              <strong className="mb-1">Manuela Rojas</strong>
              <small className="text-muted">{nota}</small>
            </div>
          </a>
          <a
            style={{ cursor: "pointer" }}
            className="list-group-item list-group-item-action py-3 lh-sm"
          >
            <div className="d-flex w-{nota}0 align-items-center justify-content-between">
              <strong className="mb-1">Maria Jose Carreño </strong>
              <small className="text-muted">{nota}</small>
            </div>
          </a>
          <a
            style={{ cursor: "pointer" }}
            className="list-group-item list-group-item-action py-3 lh-sm"
          >
            <div className="d-flex w-{nota}0 align-items-center justify-content-between">
              <strong className="mb-1">Diego Días </strong>
              <small className="text-muted">{nota}</small>
            </div>
          </a>
          <a
            style={{ cursor: "pointer" }}
            className="list-group-item list-group-item-action py-3 lh-sm"
            aria-current="true"
          >
            <div className="d-flex w-{nota}0 align-items-center justify-content-between">
              <strong className="mb-1">Marcos Antonio</strong>
              <small className="text-muted">{nota}</small>
            </div>
          </a>
          <a
            style={{ cursor: "pointer" }}
            className="list-group-item list-group-item-action py-3 lh-sm"
          >
            <div className="d-flex w-{nota}0 align-items-center justify-content-between">
              <strong className="mb-1">Alexa Gimenez</strong>
              <small className="text-muted">{nota}</small>
            </div>
          </a>
          <a
            style={{ cursor: "pointer" }}
            className="list-group-item list-group-item-action py-3 lh-sm"
          >
            <div className="d-flex w-{nota}0 align-items-center justify-content-between">
              <strong className="mb-1">Gozalo gimenes de quesada</strong>
              <small className="text-muted">{nota}</small>
            </div>
          </a>
          <a
            style={{ cursor: "pointer" }}
            className="list-group-item list-group-item-action py-3 lh-sm"
            aria-current="true"
          >
            <div className="d-flex w-{nota}0 align-items-center justify-content-between">
              <strong className="mb-1">Elizabeth Gómez</strong>
              <small className="text-muted">{nota}</small>
            </div>
          </a>
          <a
            style={{ cursor: "pointer" }}
            className="list-group-item list-group-item-action py-3 lh-sm"
          >
            <div className="d-flex w-{nota}0 align-items-center justify-content-between">
              <strong className="mb-1">Angela Rueda</strong>
              <small className="text-muted">{nota}</small>
            </div>
          </a>
          <a
            style={{ cursor: "pointer" }}
            className="list-group-item list-group-item-action py-3 lh-sm"
          >
            <div className="d-flex w-{nota}0 align-items-center justify-content-between">
              <strong className="mb-1">Julian Dabid Gomez</strong>
              <small className="text-muted">{nota}</small>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
