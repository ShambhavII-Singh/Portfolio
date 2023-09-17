import React from "react";
import { Fade } from "react-bootstrap";
import Lottie from "lottie-react";
import loadingAnimationDark from '../assets/loadingAnimationDark.json'
import loadingAnimationLight from '../assets/loadingAnimationLight.json'

const LoadingScreen = (WrappedComponent) => {
   return class extends React.Component {
      constructor(props){
         super(props)
         this.state = {
            done: undefined,
            darkTheme: true
         }
      }

      // async componentDidMount() {
      //    try {
      //       setTimeout(() => {
      //          this.setState({
      //             done: true,
      //          });
      //       }, 1500)
      //    } catch (err) {
      //       console.log(err);
      //       this.setState({
      //          done: true,
      //       });
      //    }
      // }

      render() {
         return(
            <div>
               {!this.state.done ? (
                  this.state.darkTheme ? <Lottie animationData={loadingAnimationDark} loop={true} width={"200px"} height={200} /> : <Lottie animationData={loadingAnimationLight} loop={true} width={200} height={200}/>
               ) : (
                  <Fade><WrappedComponent {...this.props} /></Fade>
               )}
            </div>
         )
      }
   }
}

export default LoadingScreen;

