import NoteItem from "../Atoms/NoteItem";

const NoteList = ({ notes }) => {
  return (
    <div>
      {notes.length > 0 ? (
        <ul>
          {notes.map((note) => (
            <NoteItem username={note.username} note={note.note} />
          ))}
        </ul>
      ) : (
        <h3>There isn't any note.</h3>
      )}
    </div>
  );
};

export default NoteList;
