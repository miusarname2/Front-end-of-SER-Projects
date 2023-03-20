import {Hero} from './components/Hero'
import {Navbar} from './components/Navbar'
import {Teams} from './components/Teams'
import {Footer} from '../components/footer'

export default function Teachers(){
    return (
      <div>
        <Navbar />
        <Hero image="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Teams />
        <footer>
          <Footer />
        </footer>
      </div>
    );
}