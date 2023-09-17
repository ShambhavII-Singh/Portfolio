import React from "react";
import ReactLoading from "react-loading";
import { Fade } from "react-bootstrap";

const LoadingScreen = (WrappedComponent) => {
   return class extends React.Component {
      constructor(props){
         super(props)
         this.state = {
            done: undefined
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
                  <ReactLoading type={"bars"} color={"red"} />
               ) : (
                  <Fade><WrappedComponent {...this.props} /></Fade>
               )}
            </div>
         )
      }
   }
}

export default LoadingScreen;

