export function App() {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total
        total={course.parts.reduce((acc, ucr) => (acc += ucr.exercises), 0)}
      />
    </div>
  )
}

interface HeaderProps {
  course: string
}
function Header({ course }: HeaderProps) {
  return <header>{course}</header>
}

interface IPart {
  name: string
  exercises: number
}
interface ContentProps {
  parts: IPart[]
}
function Content({ parts }: ContentProps) {
  return (
    <>
      {parts.map(({ name, exercises }) => (
        <Part key={name} name={name} exercises={exercises} />
      ))}
    </>
  )
}

function Part({ name, exercises }: IPart) {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

interface TotalProps {
  total: number
}
function Total({ total }: TotalProps) {
  return <p>Number of exercises {total}</p>
}
