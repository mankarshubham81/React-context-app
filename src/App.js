// Context provides a way to pass data through the component tree without having to pass props down manually at every level
import React, {Fragment} from "react";

import Provider  from "./Provider";
import Context from "./Context";

const Agents = () => {
  return <AgentOne />;
}

const AgentOne = () => {
  return <AgentTwo />;
}

const AgentTwo = () => {
  return <AgentBond />;
}


const AgentBond = () => {
  return (<Context.Consumer>
    {
      (context) =>  (
        <Fragment>
          <h3>Agent Information</h3>
          <p>Mission Name : {context.data.mname}</p>
          <p>Agent Name : {context.data.agent}</p>
          <p>Status : {context.data.accept}</p>
          <button onClick={context.isMissionAccepted} >Click here to Accept</button>
        </Fragment>
      )
    }
  </Context.Consumer>);
}


const App = () => {
  return (
    <React.Fragment>
      <h1>Context API</h1>
      <Provider>
        <Agents />
      </Provider>
    </React.Fragment>
  );
}

export default App;