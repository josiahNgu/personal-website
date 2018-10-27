import React from 'react';
// import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import '../style/App.css';


class LandingPage extends React.Component {
  constructor(props){
    super(props)
     this.state = {
       txt: ''
     };
     this.words = ["", "Full Stack Dev" , "Creator"];
     this.wordIndex = 0;
     this.isDeleting = false;
     this.typewriter();
  }
  typewriter () {
     const current = this.wordIndex % this.words.length;
     const fullText = this.words[current];
    //check if deleting 
   if(this.isDeleting){
    this.setState({
      txt: fullText.substring(0, this.state.txt.length-1)
    });
    }else{
      this.setState({
        txt:fullText.substring(0, this.state.txt.length+1)
      });   
     }
    //Initial TypeSpeed
    let typeSpeed = 500;
    if(this.isDeleting){
      typeSpeed /=2;
    }
    //if word is complete
    if(!this.isDeleting && this.state.txt === fullText) {
      // make pause at end 
      typeSpeed = 800;
      this.isDeleting = true;
    }
    else if (this.isDeleting && this.state.txt === '') {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 500;
    }
    setTimeout(() => this.typewriter(), typeSpeed);
    return (
      <span className="txt">${this.state.txt}</span>
    );
  }

  render() {
    return (
      <div className="showcase d-flex flex-row justify-content-center"> 
      <div className="landingPage d-flex flex-column justify-content-center align-items-center">
          <div><h2>Josiah Ngu</h2></div>
          <div className=""><h1><strong><span className="txt-type">{this.state.txt}</span></strong></h1></div>
         <div className=" d-flex align-self-center"><h2> My Website</h2></div>
      </div> 
      </div>
    );
  }
}
export default LandingPage;