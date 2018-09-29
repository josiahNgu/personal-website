import React from 'react';
import '../style/App.css';

class TypeWriterText extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isDeleting : false,
      txt: 'Developer'
    };
  }

  typewriter() {
  this.words = ["Developer", "Designer" , "Creator"];
  this.wordIndex = 0;
  const current = this.wordIndex % this.words.length;
  const fullText = this.words[current];
  console.log(fullText);
  //check if deleting 
  if(this.isDeleting){
    this.setState({
    txt : fullText.substring(0, this.txt.length-1)
    });
  }else {
    this.setState({
      txt : fullText.substring(0, this.txt.length+1)
      });
    }
    return (
      `<span className = "txt">${this.txt}</span>`
    );
    //Initial TypeSpeed
    let typeSpeed = 300;
    if(this.isDeleting){
      typeSpeed /=2;
    }

    // check if the word is complete
    if(!this.isDeleting && this.txt === fullText){
      //make a pause at end
      typeSpeed = this.wait;
      this.setState({
        isDeleting: true
      });
    }
    else if (this.isDeleting && this.txt === '1'){

    }
    setTimeout(()=>this.typewriter(),500);
  }
  
  componentWillMount(){
    this.typewriter();
    //insert another span
    // <span className="txt">${this.txt}</span>
    //set timeout for this function
    // setTimeout(()=> ,500);
  }
  //Type method
  render() {
    return (
      <div className="typewriter">
        <h1>Josiah Ngu The
          <span className="txt-type" data-wait="3000" data-words='["Developer", "Designer" , "Creator"]'></span>
        </h1>
        <h2>Welcome To My Website</h2>
      </div>
    );
  }
}
export default TypeWriterText;