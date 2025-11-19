import FruitItem from "./FruitItem.jsx";

export default function Fruits1() {
  const fruits = [
    { name: "Apple", calories: 95 },
    { name: "Banana", calories: 105 },
    { name: "Cherry", calories: 50 },
    { name: "Pineapple", calories: 452 },
    { name: "Elderberry", calories: 73 },
  ];

  const fruitsModified = fruits.map((item) => (
    <FruitItem key={item.name} name={item.name} calories={item.calories} />
  ));

  return <ol>{fruitsModified}</ol>;
}
