import React from "react";
import './app.css';
import ReactDOM from 'react-dom';


class App extends React.Component {
    state= {
        buttonColor: false
    };
    handleButtonclick = () => {
        const buttonColor = this.state.buttonColor
     this.setState ({buttonColor: !buttonColor})   
    };
   

    render () {
        
        let textColor = ( <h1 className="red">Hello there</h1>);
           if (this.state.buttonColor === false) {
               textColor = (<h1 className="blue">Hello there</h1>);
            }
            return (
                <div>
                    {textColor}
                    <button onClick={this.handleButtonclick}>click!</button>
                </div>
        );
        
    }
}
export default App;