import { useState } from "react";

const App = () => {
  const [addnotes, setnotes] = useState(" ");
  const [notes, displaynotes] = useState(" ");

  const Savedcontent = (event) => {
    console.log(event.target.value);
    setnotes(event.target.value);
  };
  const savednotes = () => {
    displaynotes(addnotes);
  };

  return (
    <>
      <div className="main_content">
        <h1>  Welcome to Notes App  📝</h1>
        <textarea
          type="value"
          placeholder="Enter your notes.."
          onChange={Savedcontent}
        ></textarea>
        <button onClick={savednotes}> SAVE </button>
        <p className="saved_notes">{notes}</p>
      </div>
    </>
  );
};

export default App;
