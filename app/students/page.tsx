import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Subjects } from "./components/subjects";
import {Footer} from '../components/footer'

export default function helloPago() {

  /* function Conv(){
    if
  } */

  return (
    <div>
      <Navbar />
      <Hero />
      <Subjects title1="Skills" description1="Subject in which to learn about programming in all its senses and forms" title2="English" description2="In this subject we will learn one of the most important languages when programming, English, since 90% of the documentation is in this language." title3="Be/Ser" description3="In this subject we develop ourselves as individuals and as members of multiple work groups." title4="Review" description4="This is a space in which we will solve doubts regarding the field of programming"/>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
