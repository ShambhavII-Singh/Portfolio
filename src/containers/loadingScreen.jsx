import React from "react";
import Lottie from "lottie-react";
import loadingAnimationDark from '../assets/loadingAnimationDark.json'
import loadingAnimationLight from '../assets/loadingAnimationLight.json'
import '../containers/loadingScreen.css'
import Fade from 'react-bootstrap/Fade'

const LoadingScreen = (WrappedComponent) => {

   return class extends React.Component {
      constructor(props){
         super(props)
         this.state = {
            done: undefined,
            darkTheme: true
         }
      }

      async componentDidMount() {
         try {
            setTimeout(() => {
               this.setState({
                  done: true,
               });
            }, 3000)
         } catch (err) {
            console.log(err);
            this.setState({
               done: true,
            });
         }
      }

      render() {
         return(
               <div>
                  {!this.state.done ? (
                     <div className="loading__animation">
                        {this.state.darkTheme ? 
                           <Lottie animationData={loadingAnimationDark} loop={true} /> : 
                           <Lottie animationData={loadingAnimationLight} loop={true} />
                        }
                     </div>
                  ) : (
                     <WrappedComponent {...this.props} />
                  )}
               </div>
         )
      }
   }
}

export default LoadingScreen;

