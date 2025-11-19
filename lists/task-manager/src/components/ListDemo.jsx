// 📖 DEMO: How React Lists Work
// This is the code you'll explain to the children!

export default function ListDemo() {
  // Step 1: We have an array (list) of data
  const favoriteColors = ["Red", "Blue", "Green", "Yellow", "Purple"];

  return (
    <div
      style={{
        padding: "20px",
        background: "#fff",
        borderRadius: "8px",
        border: "2px solid #ddd",
      }}
    >
      <h2 style={{ color: "#2196F3" }}>🌈 Example: Favorite Colors</h2>

      {/* Step 2: The OLD way (without lists) - This is repetitive! */}
      <div
        style={{
          marginBottom: "30px",
          padding: "15px",
          background: "#ffebee",
          borderRadius: "5px",
        }}
      >
        <h3>❌ The Hard Way (Don't do this!):</h3>
        <ul>
          <li>Red</li>
          <li>Blue</li>
          <li>Green</li>
          <li>Yellow</li>
          <li>Purple</li>
        </ul>
        <p style={{ fontSize: "14px", color: "#666" }}>
          We have to write each item manually! 😫
        </p>
      </div>

      {/* Step 3: The NEW way (with .map()) - This is smart! */}
      <div
        style={{ padding: "15px", background: "#e8f5e9", borderRadius: "5px" }}
      >
        <h3>✅ The Smart Way (Using .map()):</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {favoriteColors.map((color, index) => (
            <li
              key={index}
              style={{
                padding: "8px",
                margin: "5px 0",
                background: "#fff",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            >
              🎨 {color}
            </li>
          ))}
        </ul>
        <div
          style={{
            marginTop: "15px",
            padding: "10px",
            background: "#fff",
            borderRadius: "4px",
          }}
        >
          <p style={{ fontSize: "14px", fontWeight: "bold", color: "#2e7d32" }}>
            ✨ Magic! We only write the code once, and React creates all the
            items!
          </p>
        </div>
      </div>

      {/* Step 4: Show the code */}
      <div
        style={{
          marginTop: "30px",
          padding: "15px",
          background: "#f5f5f5",
          borderRadius: "5px",
        }}
      >
        <h3>💻 The Code:</h3>
        <pre
          style={{
            background: "#263238",
            color: "#aed581",
            padding: "15px",
            borderRadius: "5px",
            overflow: "auto",
            fontSize: "14px",
          }}
        >
          {`// 1. Create an array
const favoriteColors = ["Red", "Blue", "Green", "Yellow", "Purple"];

// 2. Use .map() to create list items
<ul>
  {favoriteColors.map((color, index) => (
    <li key={index}>🎨 {color}</li>
  ))}
</ul>

// What happens?
// - .map() goes through each color
// - For each color, it creates a <li> element
// - key={index} helps React keep track of items`}
        </pre>
      </div>

      {/* Step 5: Key points */}
      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          background: "#fff3e0",
          borderRadius: "5px",
        }}
      >
        <h3>📝 Important Points:</h3>
        <ul style={{ lineHeight: "1.8" }}>
          <li>
            <strong>.map()</strong> - Loops through the array and creates
            elements
          </li>
          <li>
            <strong>key</strong> - A unique identifier for each item (React
            needs this!)
          </li>
          <li>
            <strong>(color, index)</strong> - The item and its position in the
            array
          </li>
          <li>
            We write the code <strong>once</strong>, React creates{" "}
            <strong>many</strong> items!
          </li>
        </ul>
      </div>
    </div>
  );
}
