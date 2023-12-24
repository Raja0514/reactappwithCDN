/*
Syntax:
       React.createElement(type,{props},children);
Where:  

type –   the type of HTML tag we are using. 
props –   represent properties like id, class, onClick, etc. 
children – represents the line that needs to be printed or 
           displayed on the screen with the respective HTML tag and property. 

Example:

React.createElement("h1", { id:"key" }, "Manavan Learn code")

*/

//React withput JSX

// const Component1 = () => {
//   const myComponentStyle = {
//     margin: "10px",
//     border: "2px solid black",
//     padding: "20px",
//   };

//   return React.createElement(
//     "h2",

//     { style: myComponentStyle },

//     "React Component without JSX"
//   );
// };

// React with JSX

const Component2 = () => {
  return <h1>welcome</h1>;
};

function Data() {
  const [count, setcount] = React.useState(0);

  const n1 = () => {
    setcount(count + 1);
  };

  const n2 = () => {
    setcount(count - 2);
  };

  return (
    <div style={{ border: "2px solid black", margin: "10px", padding: "10px" }}>
      <h3>Counter App function Based</h3>
      <p>{count}</p>
      <button onClick={n1}>Increment</button>
      <button onClick={n2}>Decrement</button>
    </div>
  );
}

class Counter extends React.Component {
  state = {
    num: 0,
  };

  handleIncrement = () => {
    this.setState({
      num: this.state.num + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      num: this.state.num - 1,
    });
  };

  render() {
    return (
      <div
        style={{ border: "2px solid black", margin: "10px", padding: "10px" }}
      >
        <h3>Counter App Class Based</h3>
        <p>{this.state.num}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root2"));

//console.log(root);

root.render(
  <React.StrictMode>
    <Component2/>
    <Data></Data>
    <Counter/>
    </React.StrictMode>

  
  
  );
