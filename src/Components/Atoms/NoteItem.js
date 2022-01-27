const NoteItem = ({ username, note }) => {
  return (
    <li>
      {username} - {note}
    </li>
  );
};

export default NoteItem;
