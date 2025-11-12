export function List({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function ListItem({ item }) {
  return <li key={item}>{item}</li>;
}
