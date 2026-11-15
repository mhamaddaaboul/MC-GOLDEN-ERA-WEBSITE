import "./App.css";
import Stampy from "./component/stampy";
import Navbar from "./component/Navbar";
import Ssundee from "./component/Ssundee";
import Sam from "./component/Sam";
import Aphmu from "./component/Aphmu";
import Contact from "./component/Contact";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>


        

        <Route
          path="/"
          element={

            <main className="home-page">

              <h1>
                MC GOLDEN ERA
              </h1>


              <div className="home-description">

                <p>
                  Welcome to the Minecraft Golden Era.
                  Explore some of the creators and series
                  that made Minecraft special.<br />
                  made by mhammad daabuol and rawan daou
                </p>

              </div>


              

              <div className="creator-section">


                {/* SSUNDEE */}

                <a
                  href="/ssundee"
                  className="creator-card"
                >

                  <img
                    src="/images/Ssundeepf.jpg"
                    alt="Ssundee"
                  />

                  <span>
                    Ssundee
                  </span>

                </a>


              

                <a
                  href="/sam"
                  className="creator-card"
                >

                  <img
                    src="/images/sampf.jpg"
                    alt="Sam Gladiator"
                  />

                  <span>
                    Sam Gladiator
                  </span>

                </a>


                

                <a
                  href="/aphmau"
                  className="creator-card"
                >

                  <img
                    src="/images/aphpf.jpeg"
                    alt="Aphmau"
                  />

                  <span>
                    Aphmau
                  </span>

                </a>


             

                <a
                  href="/stampy"
                  className="creator-card"
                >

                  <img
                    src="/images/stampypf.jpg"
                    alt="Stampy"
                  />

                  <span>
                    Stampy
                  </span>

                </a>


              </div>

            </main>

          }
        />


        

        <Route
          path="/ssundee"
          element={<Ssundee />}
        />


        

        <Route
          path="/sam"
          element={<Sam />}
        />


        <Route path="/contact"
         element={<Contact />} />

        <Route
          path="/aphmau"
          element={<Aphmu />}
        />


        

        <Route
          path="/stampy"
          element={<Stampy />}
        />

      </Routes>

    </BrowserRouter>

  );
}


export default App;