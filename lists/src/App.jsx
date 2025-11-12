import { List, ListItem } from "./components/List";

export default function DoubleIncrementDemo() {
  return (
    <div>
      <List items={[1, 2, 3, 4, 5]} />
      <ListItem item={1} />
      <ListItem item={2} />
      <ListItem item={3} />
      <ListItem item={4} />
      <ListItem item={5} />
    </div>
  );
}
