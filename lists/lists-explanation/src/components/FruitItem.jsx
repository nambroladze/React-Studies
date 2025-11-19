export default function FruitItem({ name, calories }) {
  return (
    //put some styling on it to showe that sometimes making item into ocmponenet is better than just returning a string do some spans and style them as well
    <li
      style={{
        padding: "8px",
        margin: "5px 0",
        background: "#fff",
        borderRadius: "4px",
        border: "1px solid #ddd",
      }}
    >
      Fruit <span style={{ fontWeight: "bold" }}>{name}</span> has{" "}
      <span style={{ color: "red" }}>{calories}</span> calories
    </li>
  );
}
