const Read = (props) => {
    console.log(props);

    const user = props.user;
    const setUser = props.setUser;

    const renderProfile = user.map(function (users, index) {
        return(
          <li key = {index}>
            <span> Name = {users.name}</span>
            <small> Age = {users.age} </small>
          </li>
        )
      })


  return (
    <div>
        <h1>Renduring JSON</h1>
        <ol>{renderProfile}</ol>
    </div>
  )
}

export default Read