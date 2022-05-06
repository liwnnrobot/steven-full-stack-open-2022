import * as React from "react"

export function App() {
  const [good, setGood] = React.useState(0)
  const [neutral, setNeutral] = React.useState(0)
  const [bad, setBad] = React.useState(0)

  return (
    <>
      <div className="feedback">
        <h3>give feedback</h3>
        <Button
          handleClick={() => {
            setGood(good + 1)
          }}
        >
          good
        </Button>
        <Button
          handleClick={() => {
            setNeutral(neutral + 1)
          }}
        >
          neutral
        </Button>
        <Button
          handleClick={() => {
            setBad(bad + 1)
          }}
        >
          bad
        </Button>
      </div>
      <Statistics feedbacks={[good, neutral, bad]} />
    </>
  )
}

interface ButtonProps {
  handleClick: () => void
  children: React.ReactNode
}

function Button({ handleClick, children }: ButtonProps) {
  return <button onClick={handleClick}>{children}</button>
}

interface StatisticsProps {
  // good, neutral, bad
  feedbacks: [number, number, number]
}

function Statistics({ feedbacks }: StatisticsProps) {
  const [good, neutral, bad] = feedbacks
  const all = good + neutral + bad
  let content: JSX.Element

  if (all != 0) {
    const average = (good - bad) / all
    const positive = (good / all) * 100

    content = (
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={`${positive} %`} />
        </tbody>
      </table>
    )
  } else {
    content = <p>No feedback given</p>
  }

  return (
    <div className="statistics">
      <h3>statistics</h3>
      {content}
    </div>
  )
}

interface StatisticLineProps {
  text: string
  value: number | string
}

function StatisticLine({ text, value }: StatisticLineProps) {
  return (
    <tr className="statistic-line">
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}
