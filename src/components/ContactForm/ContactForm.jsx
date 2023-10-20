import { useState } from 'react';


export const ContactForm = (props) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChange = evt => {
    if (evt.target.name === 'name') {
      setName(evt.target.value);
      return;
    }
    setNumber(evt.target.value);
  };

  const onSubmit = evt => {
    evt.preventDefault();
    props.createContact({
      name,
      number
    });

    evt.target.reset();
  };


    return (
      <form onSubmit={onSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            required
            onChange={onChange}
            pattern="^[a-zA-Z]+$"
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            required
            onChange={onChange}
            pattern="^[ 0-9]+$"
          />
        </label>
        <button>add contact</button>
      </form>
    );
  }
