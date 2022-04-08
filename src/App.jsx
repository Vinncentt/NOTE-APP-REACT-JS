import { useState } from "react";
import { nanoid } from "nanoid";
import { NotesList } from "./components/NotesList";

export const App = () => {
  // usestate hook
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is my first note",
      date: "14/03/2022",
    },
    {
      id: nanoid(),
      text: "this is my second note",
      date: "15/03/2022",
    },
    {
      id: nanoid(),
      text: "this is my third note",
      date: "16/03/2022",
    },
    {
      id: nanoid(),
      text: "this is another note",
      date: "17/03/2022",
    },
    {
      id: nanoid(),
      text: "this is another note",
      date: "17/03/2022",
    },
    {
      id: nanoid(),
      text: "there is no notes here",
      date: "17/03/2022",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    // spreed operator
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};
// export default App;
