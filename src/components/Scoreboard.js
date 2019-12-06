import React, { useState } from "react";
import Button from "./Button";
import Display from "./Display";

function Scoreboard() {
  const [ball, setBall] = useState(0);
  const [strike, setStrike] = useState(0);
  const [runsHome, setRunsHome] = useState(0);
  const [runsAway, setRunsAway] = useState(0);
  const [clearRunsHome, setClearRunsHome] = useState(0);
  const [clearRunsAway, setClearRunsAway] = useState(0);
  console.log(ball);
  console.log(strike);
  console.log(runsHome);
  console.log(runsAway);

  return (
    <div className="scoreboard">
      <div className="displays">
        <Display className="display">Strikes: {strike} </Display>
        <Display className="display">Balls: {ball}</Display>
        <Display className="display">Home Score: {runsHome}</Display>
        <Display className="display">Away Score: {runsAway}</Display>
      </div>
      <div className="buttons">
        <Button
          name={"Ball"}
          onClick={() => (ball === 4 ? setBall(0) : setBall(ball + 1))}
        />
        <Button
          name={"Strike"}
          onClick={() => (strike === 3 ? setStrike(0) : setStrike(strike + 1))}
        />
        <Button
          name={"Foul"}
          onClick={() => (strike <= 1 ? setStrike(0) : setStrike(strike + 1))}
        />
        <Button name={"Hit"} onClick={() => setStrike(0) && setBall(0)} />

        <Button
          name={"Score - Home"}
          onClick={() =>
            runsHome <= 1 ? setRunsHome(0) : setRunsHome(runsHome + 1)
          }
        />
        <Button
          name={"Score - Away"}
          onClick={() =>
            runsAway <= 1 ? setRunsAway(0) : setRunsAway(runsAway + 1)
          }
        />
        <Button
          name={"Clear Score - Home"}
          onClick={() => setClearRunsHome(0)}
        />
        <Button
          name={"Clear Score - Away"}
          onClick={() => setClearRunsAway(0)}
        />
      </div>
    </div>
  );
}

export default Scoreboard;
