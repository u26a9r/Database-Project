import Login from "./login";
import Signup from "./signup";
import React from "react"

class SignIn extends React.Component {
   
  constructor(props){
    super(props);
    this.state = {
      isLogginActive: true,
    }
  }

  changeState() {
    const {isLogginActive} = this.state;
    if (isLogginActive) {
      this.RightSide.classList.remove("right");
      this.RightSide.classList.add("left");
    } else {
      this.RightSide.classList.remove("left");
      this.RightSide.classList.add("right");
    }

    this.setState((prevState) => ({ isLogginActive: !prevState.isLogginActive}));
  }
  render () {

    const { isLogginActive } = this.state;
    
    return (
      <div className="SignIn"> 
        <div className="login">
          <div className="container">
            {isLogginActive && <Login containerRef={(ref) => this.current = ref}/>}
            {!isLogginActive && <Signup containerRef={(ref) => this.current = ref}/>}
          </div>
          <RightSide isLogginActive = {this.current} containerRef={ref => this.RightSide = ref} onClick={this.changeState.bind(this)} />
        </div>
      </div>
    )
  }
}
 
const RightSide = props => {
  return <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
    <div className="inner-container">
    <div className="text">{props.current}SignIn/<br/>SignUp</div>
    </div>
  </div>
}


export default SignIn
