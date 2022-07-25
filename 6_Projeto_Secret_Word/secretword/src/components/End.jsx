const End = ({ retry }) => {
  return (
    <div className="end">
      <h1>Game over</h1>
      <button onClick={retry}>Try again</button>
    </div>
  )
}

export {End}