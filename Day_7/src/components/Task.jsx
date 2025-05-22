import React, { useState } from 'react';

function Task1() {
  return <>
    <h3>1. Write a short explanation of event handling in React.</h3>
    <p>
      Event handling in React involves responding to user interactions like clicks, form submissions, and keyboard inputs. <br />
      React utilizes a synthetic event system, which is a cross-browser wrapper around the native browser events, ensuring consistent behavior across different browsers.
    </p>
    
  </>;
}


function ClickButton() {
  const handleClick = () => {
    console.log("Button Clicked");
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}


function BindFunction() {
  const showMessage = () => {
    alert("Function call on button click!");
  };

  return (
    <button onClick={showMessage}>
      Call Function
    </button>
  );
}

function InlineArrow() {
  return (
    <button onClick={() => alert("Button Clicked!")}>
      Click Inline
    </button>
  );
}

function EventObject() {
  const handleClick = (event) => {
    console.log(event);
  };

  return (
    <button onClick={handleClick}>
      Show Event Object
    </button>
  );
}


function GreetButton() {
  const greet = (name) => {
    alert(`Hello, ${name}`);
  };

  return (
    <button onClick={() => greet("John")}>
      Greet
    </button>
  );
}

function InputDisplay() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        onChange={handleChange}
        value={value}
        className='input-style'
      />
      <p>You are typing: {value}</p>
    </div>
  );
}


function SimpleForm() {
  const [formData, setFormData] = useState({ name: '', place: '' });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(formData);
    setFormData({ name: '', place: '' }); 
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input 
            id="name"
            type="text" 
            name="name" 
            placeholder="Enter Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="place">Place:</label>
          <input 
            id="place"
            type="text" 
            name="place" 
            placeholder="Enter Place" 
            value={formData.place} 
            onChange={handleChange} 
            required 
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {submittedData && (
        <div className="result">
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Place:</strong> {submittedData.place}</p>
        </div>
      )}
    </div>
  );
}

function ToggleParagraph() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Paragraph
      </button>

      {isVisible && (
        <p>Welcome to React ..</p>
      )}
    </div>
  );
}

function MouseOver() {
  const handleMouseOver = () => {
    console.log("Mouse Over");
  };

  return (
    <button onMouseOver={handleMouseOver}>
      Hover over
    </button>
  );
}

function KeyPress() {
  const handleKeyPress = () => {
    console.log("Key Pressed");
  };

  return (
    <input className="key-input"
      type="text" 
      onKeyPress={handleKeyPress} 
      placeholder="Type something..."
    />
  );
}

function DisableButton() {
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    setDisabled(true);
  };

  return (
    <button onClick={handleClick} disabled={disabled}>
      {disabled ? 'Disabled' : 'Click Me'}
    </button>
  );
}

function Task() {
  return (
    <div>
      <Task1 />
      <hr />
      <h3>2. Button Click Event: Create a button that displays "Button Clicked" in the console when clicked.</h3>
      <ClickButton />
      <hr />
      <h3>3. Function Binding in Functional Components: Create a button that calls a function using the onClick event handler</h3>
      <BindFunction />
      <hr />
      <h3>4. Inline Event Handler: Use an inline arrow function to handle button clicks.</h3>
      <InlineArrow />
      <hr />
      <h3>5. Event Object: Display the event object in the console when a button is clicked.</h3>
       <EventObject />
      <hr />
      <h3>6. Passing Arguments to Event Handlers: Create a button that displays "Hello, John" when clicked, passing "John" as an argument.</h3>
      <GreetButton />
      <hr />
      <h3>7. Input Change Event: Display the current value of an input field as the user types.</h3>
      <InputDisplay />
      <hr />
      <h3>8. Form Submit Event: Create a form with an input field and display the submitted value below the form on submit.</h3>
      <h3>9. Prevent Default Event: Use preventDefault() to stop the form from reloading the page on submit.</h3>
      <SimpleForm />
      <hr />
      <h3>10.Toggle Visibility on Button Click: Show or hide a paragraph when a button is clicked.</h3>
      <ToggleParagraph />
      <hr />
      <h3>11.Mouse Over Event: Display "Mouse Over" in the console when hovering over a button.</h3>
      <MouseOver />
      <hr />
      <h3>12.Keyboard Event: Display "Key Pressed" in the console when a key is pressed in an input field. </h3>
      <KeyPress />
      <hr />
      <h3>13.Disable Button on Click: Disable a button after it is clicked once. </h3>
      <DisableButton />
    </div>
  );
}

export default Task;
