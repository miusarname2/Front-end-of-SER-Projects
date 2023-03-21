"use client";

import { useEffect, useState } from "react";

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
            style={{ cursor: "pointer" }}
            className="list-group-item list-group-item-action  py-3 lh-sm"
            aria-current="true"
          >
            <div className="d-flex w-{nota}0 align-items-center justify-content-between">
              <strong className="mb-1">Nota 1 </strong>
              <small>{nota}</small>
            </div>
          </a>
          <a
            style={{ cursor: "pointer" }}
            className="list-group-item list-group-item-action py-3 lh-sm"
          >
            <div className="d-flex w-{nota}0 align-items-center justify-content-between">
              <strong className="mb-1">Nota 2</strong>
              <small className="text-muted">{nota}</small>
            </div>
          </a>
          <a
            style={{ cursor: "pointer" }}
            className="list-group-item list-group-item-action py-3 lh-sm"
          >
            <div className="d-flex w-{nota}0 align-items-center justify-content-between">
              <strong className="mb-1">Nota 3 </strong>
              <small className="text-muted">{nota}</small>
            </div>
          </a>

          <a
            style={{ cursor: "pointer" }}
            className="list-group-item list-group-item-action py-3 lh-sm"
            aria-current="true"
          >
            <div className="d-flex w-{nota}0 align-items-center justify-content-between">
              <strong className="mb-1">Nota 4</strong>
              <small className="text-muted">{nota}</small>
            </div>
          </a>
          <a
            style={{ cursor: "pointer" }}
            className="list-group-item list-group-item-action py-3 lh-sm"
          >
            <div className="d-flex w-{nota}0 align-items-center justify-content-between">
              <strong className="mb-1">Nota 4 </strong>
              <small className="text-muted">{nota}</small>
            </div>
          </a>
          <a
            style={{ cursor: "pointer" }}
            className="list-group-item list-group-item-action py-3 lh-sm"
          >
            <div className="d-flex w-{nota}0 align-items-center justify-content-between">
              <strong className="mb-1">Nota 4 </strong>
              <small className="text-muted">{nota}</small>
            </div>
          </a>
          <a
            style={{ cursor: "pointer" }}
            className="list-group-item list-group-item-action py-3 lh-sm"
            aria-current="true"
          >
            <div className="d-flex w-{nota}0 align-items-center justify-content-between">
              <strong className="mb-1">Nota 7</strong>
              <small className="text-muted">{nota}</small>
            </div>
          </a>
          <a
            style={{ cursor: "pointer" }}
            className="list-group-item list-group-item-action py-3 lh-sm"
          >
            <div className="d-flex w-{nota}0 align-items-center justify-content-between">
              <strong className="mb-1">Nota 8</strong>
              <small className="text-muted">{nota}</small>
            </div>
          </a>
          <a
            style={{ cursor: "pointer" }}
            className="list-group-item list-group-item-action py-3 lh-sm"
          >
            <div className="d-flex w-{nota}0 align-items-center justify-content-between">
              <strong className="mb-1">Nota 9</strong>
              <small className="text-muted">{nota}</small>
            </div>
          </a>
          <a
            style={{ cursor: "pointer" }}
            className="list-group-item list-group-item-action py-3 lh-sm"
            aria-current="true"
          >
            <div className="d-flex w-{nota}0 align-items-center justify-content-between">
              <strong className="mb-1">Nota {nota}</strong>
              <small className="text-muted">{nota}</small>
            </div>
          </a>
          <a
            style={{ cursor: "pointer" }}
            className="list-group-item list-group-item-action py-3 lh-sm"
          >
            <div className="d-flex w-{nota}0 align-items-center justify-content-between">
              <strong className="mb-1">Nota 11</strong>
              <small className="text-muted">{nota}</small>
            </div>
          </a>
          <a
            style={{ cursor: "pointer" }}
            className="list-group-item list-group-item-action py-3 lh-sm"
          >
            <div className="d-flex w-{nota}0 align-items-center justify-content-between">
              <strong className="mb-1">Nota 12</strong>
              <small className="text-muted">{nota}</small>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
