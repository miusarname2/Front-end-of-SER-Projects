export function Notice() {
  return (
    <div
      style={{
        marginRight: "650px",
        marginLeft: "650px",
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
      <div id="carouselExample" className="carousel slide">
        <div
          className="carousel-inner"
          style={{
            maxHeight: "650px",
            maxWidth: "650px",
            borderRadius: "10px",
          }}
        >
          <div className="carousel-item active">
            <img
              src="https://scontent.fbga1-4.fna.fbcdn.net/v/t39.30808-6/335261887_599382548423555_727367396456272121_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeG5U302FStDtOAdJgAfZpeZhdYYD9y5xOKF1hgP3LnE4vAQP-p9DhWYxa5jOgYK_pPXLQbk5SBF8Ty78PCLL6pW&_nc_ohc=frJEEiTSowkAX83S0Vh&_nc_ht=scontent.fbga1-4.fna&oh=00_AfASTTfOk0jGI-5L4kLDjDGko3cDW6KnID-OH-VReqsPDw&oe=641D1273"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://scontent.fbga1-4.fna.fbcdn.net/v/t39.30808-6/335037423_929406041416503_5307645713990797720_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHX8gK5JpLOonxtj4HitBG4UPgW4ESDQjxQ-BbgRINCPP5hlIOlM2yttvhDdGTlNWCYQCJxy6i_QdxJ_4TLqMZC&_nc_ohc=HmK3A9SWqkwAX8xowWo&_nc_ht=scontent.fbga1-4.fna&oh=00_AfBhgJdtYxxmPHmCd1y97wAtRhVAYW2_kBEoKh1NloDP9A&oe=641C327C"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://scontent.fbga1-4.fna.fbcdn.net/v/t39.30808-6/335023891_3381751272039019_5534173987210401718_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFentRBIYPrmN3kX4xpMIrrqzS07GNsTZKrNLTsY2xNkkbRcbbsAcMp2q2bBLY9MSyNWRqgKgfdkFMSZ5ENswBr&_nc_ohc=UpRkIc-tYcsAX90s1kS&_nc_ht=scontent.fbga1-4.fna&oh=00_AfAcFq4_YZSqusJJGmL0jzKHO3Gxu27kyELPCRneEBJTHA&oe=641BBEB1"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://scontent.fbga1-4.fna.fbcdn.net/v/t39.30808-6/334952146_241559798307327_5342319166555044604_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGQBmhz2wRYPWaGH3ekNb3cUM2kEioesrdQzaQSKh6yt5kMGfi4bGXSXuMVMqHUH4Fje1W0leW5nWzMzaqdkxyg&_nc_ohc=vPVnvMK8KUkAX_r5UJK&_nc_ht=scontent.fbga1-4.fna&oh=00_AfDo-2NI3esLzpZI6YfTKrVExUDSQs-_wA--ZhPc3sSA1Q&oe=641C5910"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://scontent.fbga1-4.fna.fbcdn.net/v/t39.30808-6/334965679_6197153386973959_3306807766325767835_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEwmogKcqa8DbATNQ1Zyguv-Djzxv_bj6P4OPPG_9uPozzdB3BQE0baOjgc-xSqqKMuZKryx6_JsabDUewVJwdz&_nc_ohc=SQUGwLqFBbYAX9UatMj&_nc_ht=scontent.fbga1-4.fna&oh=00_AfCzmRKddYFRNwG8i7KgEcOPaJRXnt0wlra0caZiQASwkQ&oe=641D0888"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
