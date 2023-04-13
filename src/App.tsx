import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { Sub } from "./types";

// const INITIAL_STATE = [
//   {
//     nick: "rarc88",
//     subMonths: 24,
//     avatar: "https://i.pravatar.cc/150?u=rarc88",
//     description: "...",
//   },
//   {
//     nick: "arca93",
//     subMonths: 5,
//     avatar: "https://i.pravatar.cc/150?u=arca93",
//   },
// ];

interface AppState {
  subs: Array<Sub>;
  newSubNumber: number;
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  // const [newSubNumber, setNewSubNumber] = useState<AppState["newSubNumber"]>(0);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // setSubs(INITIAL_STATE);

    const getData = async () => {
      return await axios.get("");
    };
  }, []);

  const handleAddNewSub = (newSub: Sub) => {
    setSubs([...subs, newSub]);
  };

  return (
    <div className="App" ref={divRef}>
      <h1>Subs</h1>
      <List subs={subs} />
      <Form addNewSub={handleAddNewSub} />
    </div>
  );
}

export default App;
