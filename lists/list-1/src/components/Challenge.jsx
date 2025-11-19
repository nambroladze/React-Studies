// 🎯 CHALLENGE: Your Turn!
// Complete the code below to display a list of animals

export default function Challenge() {
  // TODO: Create an array called "animals" with at least 5 animals
  // Example: const animals = ["Dog", "Cat", "Bird"];
  // eslint-disable-next-line no-unused-vars
  const animals = []; // 👈 Fill this in!

  // TODO: Complete the code below to display the animals in a list
  // Hint: Use .map() just like in the demo!

  return (
    <div
      style={{
        padding: "20px",
        background: "#fff",
        borderRadius: "8px",
        border: "2px solid #4CAF50",
      }}
    >
      <h2 style={{ color: "#4CAF50" }}>🎯 Your Challenge!</h2>

      <div
        style={{
          padding: "15px",
          background: "#fff9c4",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <h3>📋 Instructions:</h3>
        <ol style={{ lineHeight: "2" }}>
          <li>
            Fill in the <code>animals</code> array with at least 5 animals
          </li>
          <li>
            Complete the code below to display them using <code>.map()</code>
          </li>
          <li>
            Don't forget the <code>key</code> prop!
          </li>
          <li>Add an emoji (🐶, 🐱, etc.) before each animal name</li>
        </ol>
      </div>

      <div
        style={{
          padding: "15px",
          background: "#e3f2fd",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <h3>🐾 Your Animal List:</h3>
        {/* TODO: Complete this section */}
        <ul style={{ listStyle: "none", padding: 0 }}>
          {/* 
            👇 Write your code here!
            Use: animals.map((animal, index) => ...)
            Don't forget: key={index}
          */}
          <li
            style={{
              padding: "10px",
              margin: "5px 0",
              background: "#fff",
              borderRadius: "4px",
            }}
          >
            {/* Your code goes here! */}
            Start coding here! 🚀
          </li>
        </ul>
      </div>

      <div
        style={{ padding: "15px", background: "#f3e5f5", borderRadius: "5px" }}
      >
        <h3>💡 Hint:</h3>
        <pre
          style={{
            background: "#263238",
            color: "#ce93d8",
            padding: "10px",
            borderRadius: "5px",
            fontSize: "13px",
          }}
        >
          {`// Your code should look something like this:
{animals.map((animal, index) => (
  <li key={index}>
    🐾 {animal}
  </li>
))}`}
        </pre>
      </div>

      {/* Solution area - for teacher to show after */}
      <details
        style={{
          marginTop: "20px",
          padding: "15px",
          background: "#e8f5e9",
          borderRadius: "5px",
        }}
      >
        <summary
          style={{ cursor: "pointer", fontWeight: "bold", color: "#2e7d32" }}
        >
          👀 Show Solution (For Teacher)
        </summary>
        <div
          style={{
            marginTop: "10px",
            padding: "10px",
            background: "#fff",
            borderRadius: "4px",
          }}
        >
          <pre
            style={{
              background: "#263238",
              color: "#aed581",
              padding: "15px",
              borderRadius: "5px",
              fontSize: "13px",
            }}
          >
            {`const animals = ["Dog", "Cat", "Bird", "Elephant", "Lion"];

<ul style={{ listStyle: "none", padding: 0 }}>
  {animals.map((animal, index) => (
    <li 
      key={index}
      style={{ 
        padding: "10px", 
        margin: "5px 0", 
        background: "#fff", 
        borderRadius: "4px" 
      }}
    >
      🐾 {animal}
    </li>
  ))}
</ul>`}
          </pre>
        </div>
      </details>
    </div>
  );
}
