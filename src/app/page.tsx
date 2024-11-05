import AboutMe from "../components/aboutme/page";
import Experience from "../components/experience/page";
import Footer from "../components/footer/page";
import Form from "../components/form/page";
import Jumbotron from "../components/jumbotron/page";
import Navbar from "../components/navbar/page";
import Portfolio from "../components/portofolio/page";
import Skills from "../components/skils/page";

function App() {
  return (
    <section className="bg-slate-800">
      <>
        <Navbar />
        <Jumbotron />
        <AboutMe />
        <Skills />
        <Portfolio />
        <Experience />
        <div className="pt-5">
          <Form />
          <Footer />
        </div>
      </>
    </section>
  );
}

export default App;
