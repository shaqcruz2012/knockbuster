# release 1 SC 3/28/2023 2:51 PM
When user clicks on a video, display video details (on same screen, no modal, + dismissable)
Simple checkout/return buttons for videos (update root state)

# release 0 SC 3/27/2023 12:00 PM
homepage (basic min styling)
display list of videos



# concepts from Monday 8-1

# concepts from Monday 8-2
What is state?
  state refers to the context in which your function/program executes
What is a pure function in functional programming?
  - A pure function's output is entirely dependent on it's input
  - If function references some state outside of itself, and the value of this state changes over time, This means our function is no longer pure-- the quality we have lost is known as referential transparency
  - Not just manipulating external state (data declared outside of function), but relying on it at all can cause you to lose referential transparency
  - anything you change/rely on 'outside' of your function results in impurity
'React components are pure functions', what does this mean?
What is react's rerender policy?
  - If the props change, the component rerenders
  - If we have no way to inform a component of a change and we want to trigger a rerender, we should use state Codeblock1.
    - defines a state isChecked: true
    - constructor(props) to bind onClickHandler method to this(js version of self)
    - define onClickHandler function to change state to reassign

Implementing functional(pure) components:
  pass
Implementing useState(hooks)
  include=> basics, why?, no mutations, brand new object, rules
  different approaches
  
  # so useState is a hook in the react library
  # states are variables that can be normal values or data structures like objects or arrays
  # since useState can update variable, we're using it in the videostore
  # to update prop when we click, because of the react policy that rerender can only happen when props change
  # I hope


# Codeblock1: State

export default function Checkbox({ label, isChecked }) {
    return (
        <>
            <label>{label}</label>
            <input type="checkbox" checked={isChecked} />
        </>
    )
}

###
import { useState } from "react";
import Checkbox from './components/Checkbox';

export default function App() {
  const [isChecked, setIsChecked] = useState(false);

  const onClickHandler = () => setIsChecked(!isChecked);

  return (
    <>
      <h1>hello world</h1>
      <button onClick={onClickHandler}>Click me</button>
      <div>
        <Checkbox label={"I am a transformer"} isChecked={isChecked} />
      </div>
    </>
  );
}

# Code block 2 Real World Example of useState

import { useState } from "react";

export default function ComplexState() {
    const [newNameInput, setNewNameInput] = useState("");
    const [newTitleInput, setNewTitleInput] = useState("");

    const [names, setNames] = useState(["A", "B", "C"]);
    const [rental, setRental] = useState({
        id: 1,
        title: "The Big Lebowski",
        year: "1991",
        rating: "R"
    });

    const addName = () => {
        // guard 1
        if (newNameInput.length === 0) {
            console.error("can't add empty string");
        }
        // guard 2
        else if (names.findIndex(name => name === newNameInput) !== -1) {
            console.error("can't add existing name to name list");
        }
        // valid case
        else {
            setNames([...names, newNameInput]);
        }

        // always reset input
        setNewNameInput("");
    }

    const changeTitle = () => {
        if (newTitleInput.length === 0) {
            console.error("can't add empty string");
            return;
        }

        setRental({
            ...rental,
            title: newTitleInput
        })

        setNewTitleInput("");
    }


    return (
        <>
            <h2>names:</h2>
            <ul>
                {names.map((name, index) => <li key={index}>{name}</li>)}
            </ul>
            <h3>Add name:</h3>
            <input type="text" onChange={(event) => setNewNameInput(event.target.value)} />
            <button onClick={addName} value={newNameInput}>Add name</button>
            <h2>Rental</h2>
            <div style={{ border: "3px solid black", width: "fit-content", padding: "18px" }}>
                <p>{rental.title}</p>
                <pre>{rental.year}</pre>
                <pre>rated {rental.rating}</pre>
            </div>
            <h3>Change title:</h3>
            <input type="text" onChange={(event) => setNewTitleInput(event.target.value)} value={newNameInput} />
            <button onClick={changeTitle}>Change title</button>

        </>
    );
}

- it's a good idea to use a unique useState variable for every input to keep track of changes to the input as they happen. This could also be accessed through an onChange's event.target.value usually but useState let's us seperate concerns so we always have an up to date reflection of the input. This is done with a combo of useState and the <input> component's props onClick and value
<!-- - style is a good built-in prop to know about, do css on the fly with an object and strings <div style={{ border: "3px solid black", width: "fit-content", padding: "18px" }}> -->
- useState with non-primitive types
<!-- // append to an array by spreading the current array contents and adding to the end
setNames([...names, newNameInput]);
// update an object by spreading the current key/val pairs and then adding/overwriting additional key/value pairs
setRental({ ...rental, title: newTitleInput }) -->



