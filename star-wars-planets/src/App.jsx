import "./App.css";
import { useEffect, useState } from "react";
import { Link } from "react-router";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(import.meta.env.VITE_API_URL);
      const data = await response.json();
      console.log(data);
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-500">
        Star Wars Planets
      </h1>
      <div className="grid gap-4 mt-8 grid-cols-3">
        {data.map((item, index) => (
          <div
            key={item.id}
            className="border border-gray-300 rounded-lg p-4 bg-gray-50 shadow-md"
          >
            <Link to={`/planetDetails/${index + 1}`}>
              <h2 className="text-red-500 text-xl font-semibold mb-2">
                {item.name}
              </h2>
            </Link>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
