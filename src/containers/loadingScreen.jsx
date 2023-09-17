import React from "react";
import Lottie from "lottie-react";
import loadingAnimationDark from '../assets/loadingAnimationDark.json'
import loadingAnimationLight from '../assets/loadingAnimationLight.json'
import { AnimatePresence } from "framer-motion";

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
                     this.state.darkTheme ? 
                        <Lottie animationData={loadingAnimationDark} loop={true} /> : 
                        <Lottie animationData={loadingAnimationLight} loop={true} />
                  ) : (
                     <AnimatePresence><WrappedComponent {...this.props} /></AnimatePresence>
                  )}
               </div>
            
         )
      }
   }
}

export default LoadingScreen;

