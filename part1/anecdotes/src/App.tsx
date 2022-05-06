import { useState } from "react"

export function App() {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ]
  const [selected, setSelected] = useState(generateRandomNumber)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [mostVotesIndex, setMostVotesIndex] = useState(0)

  if (votes[mostVotesIndex] < votes[selected]) setMostVotesIndex(selected)

  function generateRandomNumber() {
    return Math.floor(Math.random() * anecdotes.length)
  }
  function handleVoteClick() {
    const copy = [...votes]

    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <>
      <div>
        <h3>Anecdote of the day</h3>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
        <button onClick={handleVoteClick}>vote</button>
        <button
          onClick={() => {
            setSelected(generateRandomNumber)
          }}
        >
          next anecdote
        </button>
      </div>
      <div>
        <h3>Anecdote with most votes</h3>
        <p>{anecdotes[mostVotesIndex]}</p>
        <p>has {votes[mostVotesIndex]} votes</p>
      </div>
    </>
  )
}
