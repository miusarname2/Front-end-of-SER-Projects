import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Teams } from "./components/Teams";
import { Footer } from "../components/footer";
import { Notice } from "./components/Notice";

export default function Teachers() {
  return (
    <div>
      <Navbar />
      <Hero image="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <div>
        <h2
          className="text-success-emphasis"
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "50px",
            fontFamily: "sans-serif",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          Notice Boards &amp; Events
        </h2>
        <Notice />
      </div>
      <hr />
      <h2
        className="text-primary"
        style={{
          textAlign: "center",
          fontSize: "50px",
          fontFamily: "sans-serif",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        Teams
      </h2>
      <Teams />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
