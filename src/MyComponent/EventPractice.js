import React, {useState} from 'react';

const MyComponent = () => {
  const [form, setForm] = useState({
    username: '',
    message: ''
  })

  const {username, message} = form

  const handleOnChange1 = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value
    }
    setForm(nextForm)
  }


  const handleOnClick = () => {
    alert(username + ': ' + message)
    setForm({
      username: '',
      message: ''
    })
  }

  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      handleOnClick()
    }
  }

  return (
    <div>
      <p>event Practice</p>
      <input
        type="text"
        name="username"
        onChange={handleOnChange1}
        placeholder="Enter username"
        value={username}
      />
      <input
        type="text"
        name="message"
        placeholder="Enter Message you want to say"
        onChange={handleOnChange1}
        onKeyPress={handleKeyPress}
        value={message}
      />
      <button
        onClick={handleOnClick}
      >
        check
      </button>
    </div>
  );
};

export default MyComponent;
