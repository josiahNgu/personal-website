import React from "react";
import "../../style/App.css";

const style = {
  borderRight: " 0.3rem solid black"
};
class TypeWriter extends React.Component {
  constructor(props) {
    super(props);
    this.words = ["STUDENT", "MINIMALIST", "CREATOR", "WEB DEV"];
    this.wordIndex = 0;
    this.isDeleting = false;
    this.typewriter();
  }
  state = {
    txt: ""
  };
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
    return <span style={style}>{this.state.txt}</span>;
  }
}
export default TypeWriter;
