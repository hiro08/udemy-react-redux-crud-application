const App = () => {
  const profiles = [
    {
      name: "Taro",
      age: 10
    },
    {
      name: "Hanako",
      age: 5
    }
  ]
  return (
    <>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </>
  )
}

const User = props => {
  return <div>I am {props.name}. and {props.age} years old!</div>
}

export default App;
