import { NavbarIndex } from "./components/Navbar";
import { LogIn } from "./components/LogIn";
import { Publicaciones } from "./components/pubs";
import {Footer} from './components/footer'
export default function HomePage() {
  return (
    <div>
      <NavbarIndex />
      <LogIn />
      <div className="col-lg-8 mx-auto p-4 py-md-5">
        <Publicaciones />
      </div>
      <footer>
        <Footer/> 
      </footer>
    </div>
  );
}
