import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const Test = 'testing 123'
    const ButtonText = 'submit'

    return(
        <div>
            <label className="label" htmlFor="name">Enter Name:</label>
            <input id="name"/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>{ButtonText}</button>
            <div>{Test}</div>
        </div>
    ) 
    // <div> Hello World!</div>;
};

ReactDOM.render(<App/>, document.querySelector('#root'));