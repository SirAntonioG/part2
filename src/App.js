const App = (props) => {
  const { notes } = props
  const notesList = notes.map(note =>
    <li key={note.id}>
      {note.content}
    </li>
  )

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesList}
      </ul>
    </div>
  )
}

export default App