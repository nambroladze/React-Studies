import FruitItem from "./components/FruitItem.jsx";
import Fruits1 from "./components/fruits1.jsx";
import Fruits2 from "./components/Fruits2.jsx";
import Fruits3 from "./components/Fruits3.jsx";

export default function App() {
  const fruits = [
    { name: "Apple", calories: 95 },
    { name: "Banana", calories: 105 },
    { name: "Cherry", calories: 50 },
    { name: "Pineapple", calories: 452 },
    { name: "Elderberry", calories: 73 },
  ];

  const modified = fruits.map((item) => (
   
  ));

  return <Fruits3 />;
}

// 1. ყველა ელემენტისთვის გავაკეთოთ იგივე array ში და დავაბრუნოთ list item - ები ol - ში. <li

// 2. map ფუნქციის გამოყენებით შევქმნათ list item - ები ol - ში, სადაც თითოეული ელემენტი ობიექტია და აქვს name და calories თვისებები.
// 3. map ფუნქციის დახმარებით შევქმნათ ჩამონათვალი, სადაც თითოელი ელემენტი არის component. შევქმნათ ახალი კომპონენტი სახელად  FruitItem, რომელიც მიიღებს name და calories.
