import React from "react";
import { Spring } from "react-spring";
import "../style/App.css";
class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: ""
    };
    this.words = ["Computer Science", "Student", "Minimalist", "Creator"];
    this.wordIndex = 0;
    this.isDeleting = false;
    this.typewriter();
  }
  typewriter() {
    const current = this.wordIndex % this.words.length;
    const fullText = this.words[current];
    //check if deleting
    if (this.isDeleting) {
      this.setState({
        txt: fullText.substring(0, this.state.txt.length - 1)
      });
    } else {
      this.setState({
        txt: fullText.substring(0, this.state.txt.length + 1)
      });
    }
    //Initial TypeSpeed
    let typeSpeed = 150;
    if (this.isDeleting) {
      typeSpeed /= 2;
    }
    //if word is complete
    if (!this.isDeleting && this.state.txt === fullText) {
      // make pause at end
      typeSpeed = 800;
      this.isDeleting = true;
    } else if (this.isDeleting && this.state.txt === "") {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 500;
    }
    setTimeout(() => this.typewriter(), typeSpeed);
    return <span className="txt">${this.state.txt}</span>;
  }

  handleScroll = e => {
    e.preventDefault();
  };
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 300, duration: 1800 }}
      >
        {props => (
          <div
            style={props}
            className="showcase d-flex flex-row justify-content-center "
          >
            <div className=" landingPage d-flex flex-column justify-content-center align-items-center">
              <div>
                <h2>Josiah Ngu</h2>
              </div>
              <div className="align-self-center">
                <h1>
                  <strong>
                    <span className="txt-type">{this.state.txt}</span>
                  </strong>
                </h1>
              </div>
              <div>
                <h4> jos81498@gmail.com</h4>
              </div>
              <div>
                <h4> +1(714)-340-9849</h4>
              </div>
              <div>
                <h4> Lincoln,NE</h4>
              </div>
              <div>
                <h4>40.8136° N, 96.7026° W</h4>
              </div>
              <section id="scrollButton" className="scrollSection">
                <a>
                  Scroll <span />
                </a>
              </section>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}
export default LandingPage;
