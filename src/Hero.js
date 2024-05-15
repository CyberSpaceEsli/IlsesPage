import frauImage from './assets/frau.png';
import './App.css';

function Hero() {

  return (
    <div className="container-xl">
        <div className="row flex-lg-row align-items-center g-5 py-5">
        <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3 text-white">
            <div className="wrapper"> 
              <span className="animated-text text-primary">Hi, </span> 
              <span className="animated-text text-primary">Hoi, </span> 
              <span className="animated-text text-primary">Hallo, </span> 
            </div> 
            my name is
            <span className="text-primary"> Ilse Löhr</span><br/>
            I‘m a web, usability and photography enthusiast.</h1>
            <p className="lead text-white">Quickly design and customize responsive mobile-first sites 
            with Bootstrap, the world’s most popular front-end open source toolkit, featuring 
            Sass variables and mixins, responsive grid system, extensive prebuilt components, and 
            powerful JavaScript plugins.</p>
            <div className="d-md-flex justify-content-md-start">
                <a type="button" className="btn btn-primary btn-lg px-4 me-md-2" href="#about">About Me</a>
            </div>
        </div>
        
        <div className="col-10 col-sm-8 col-lg-6">
            <img src={frauImage} className="d-block mx-lg-auto img-fluid" width="600" height="500" alt="lineart women"/>
        </div>
        </div>
    </div>
  );
}

export default Hero;