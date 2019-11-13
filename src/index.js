import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const Test = 'testing 123'

    return(
        <div>
            <label className="label" htmlFor="name">Enter Name:</label>
            <input id="name"/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>Submit</button>
            <div>{Test}</div>
        </div>
    ) 
    // <div> Hello World!</div>;
};

ReactDOM.render(<App/>, document.querySelector('#root'));