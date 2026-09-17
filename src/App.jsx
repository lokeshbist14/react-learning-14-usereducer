import React, { useReducer } from "react";

function reducer(state, action) {
  // Example 1 - Increment
  if (action.type === "increment") {
    return state + 1;
  }

  // Example 2 - Decrement
  if (action.type === "decrement") {
    return state - 1;
  }

  // Example 3 - Reset
  if (action.type === "reset") {
    return 0;
  }

  // Example 4 - Reset to a specific number
  if (action.type === "resetTo") {
    return action.payload;
  }

  // Example 5 - Add using payload
  if (action.type === "add") {
    return state + action.payload;
  }

  // Example 6 - Subtract using payload
  if (action.type === "subtract") {
    return state - action.payload;
  }

  // Example 7 - Double
  if (action.type === "double") {
    return state * 2;
  }

  return state;
}

// Example 8 - Object State
function userReducer(state, action) {
  if (action.type === "changeName") {
    return {
      ...state,
      name: action.payload,
    };
  }

  if (action.type === "changeAge") {
    return {
      ...state,
      age: action.payload,
    };
  }

  return state;
}

// Example 9 - Form
function formReducer(state, action) {
  if (action.type === "updateName") {
    return {
      ...state,
      name: action.payload,
    };
  }

  if (action.type === "updateEmail") {
    return {
      ...state,
      email: action.payload,
    };
  }

  return state;
}

// Example 10 - Task Manager
function taskReducer(state, action) {
  if (action.type === "add") {
    return [...state, action.payload];
  }

  if (action.type === "delete") {
    return state.filter((task) => task.id !== action.payload);
  }

  if (action.type === "clear") {
    return [];
  }

  return state;
}

// App Component
function App() {
  // Examples 1 to 7
  const [count, dispatch] = useReducer(reducer, 0);

  // Example 8
  const [user, userDispatch] = useReducer(userReducer, {
    name: "Lokesh",
    age: 20,
  });

  // Example 9
  const [form, formDispatch] = useReducer(formReducer, {
    name: "",
    email: "",
  });

  // Example 10
  const [tasks, taskDispatch] = useReducer(taskReducer, []);

  return (
    <div>
      <h1>useReducer Examples 1-10</h1>

          {/* Example 1 - Increment */}
      <h2>Example 1 - Increment</h2>

      <p>Count: {count}</p>

      <button onClick={() => dispatch({ type: "increment" })}>
        Increase
      </button>

          {/* Example 2 - Decrement */}
      <h2>Example 2 - Decrement</h2>

      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrease
      </button>


          {/* Example 3 - Reset */}
      <h2>Example 3 - Reset</h2>

      <button onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>


          {/* Example 4 - Reset to 10 */}
      <h2>Example 4 - Reset to 10</h2>

      <button
        onClick={() =>
          dispatch({
            type: "resetTo",
            payload: 10,
          })
        }
      >
        Reset to 10
      </button>


          {/* Example 5 - Add 5 */}
      <h2>Example 5 - Add 5</h2>

      <button
        onClick={() =>
          dispatch({
            type: "add",
            payload: 5,
          })
        }
      >
        Add 5
      </button>


          {/* Example 6 - Subtract 3 */}
      <h2>Example 6 - Subtract 3</h2>

      <button
        onClick={() =>
          dispatch({
            type: "subtract",
            payload: 3,
          })
        }
      >
        Subtract 3
      </button>


          {/* Example 7 - Double */}
      <h2>Example 7 - Double</h2>

      <button onClick={() => dispatch({ type: "double" })}>
        Double
      </button>


          {/* Example 8 - Object State */}
      <h2>Example 8 - Object State</h2>

      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>

      <button
        onClick={() =>
          userDispatch({
            type: "changeName",
            payload: "Rahul",
          })
        }
      >
        Change Name
      </button>

      <button
        onClick={() =>
          userDispatch({
            type: "changeAge",
            payload: 25,
          })
        }
      >
        Change Age
      </button>


          {/* Example 9 - Form */}
      <h2>Example 9 - Form</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={form.name}
        onChange={(event) =>
          formDispatch({
            type: "updateName",
            payload: event.target.value,
          })
        }
      />

      <br />
      <br />

      <input
        type="email"
        placeholder="Enter your email"
        value={form.email}
        onChange={(event) =>
          formDispatch({
            type: "updateEmail",
            payload: event.target.value,
          })
        }
      />

      <p>Name: {form.name}</p>
      <p>Email: {form.email}</p>


          {/* Example 10 - Task Manager */}
      <h2>Example 10 - Task Manager</h2>

      <button
        onClick={() =>
          taskDispatch({
            type: "add",
            payload: {
              id: Date.now(),
              text: "Learn React",
            },
          })
        }
      >
        Add Task
      </button>

      <button onClick={() => taskDispatch({ type: "clear" })}>
        Clear All
      </button>

      <h3>My Tasks:</h3>

      {tasks.map((task) => (
        <div key={task.id}>
          <span>{task.text}</span>

          <button
            onClick={() =>
              taskDispatch({
                type: "delete",
                payload: task.id,
              })
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;