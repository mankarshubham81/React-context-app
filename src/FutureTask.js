import React, { useState } from "react";

const GrandChild = (props) => {
  return (
    <div>
      <h3>GrandChild</h3>
      <Child pro={props.cn}/>
    </div>
  );
}

const Child = (props) => {
  return (
    <h2>
      Child : {props.pro}
    </h2>
  );
}

const App = () => {
  const [companyName] = useState("Amazoan");
  return (
    <div>
      <h1>hi</h1>
      <GrandChild cn={companyName} />
    </div>
  );
}

export default App;