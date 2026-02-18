import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router";
export default function PlanetDetails() {
  const [planet, setPlanet] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPlanet = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
      const data = await response.json();
      console.log(data);
      setPlanet(data);
    };
    fetchPlanet();
  }, [id]);

  return (
    <div>
      <div className="max-w-xl mx-auto mt-10 p-8 rounded-lg shadow-lg bg-slate-800">
        <h2 className="text-3xl font-extrabold text-red-400 mb-6 text-center tracking-wide">
          {planet?.name}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-left">
          <div>
            <span className="font-semibold text-blue-300">Climate:</span>
            <span className="ml-2 text-gray-100">
              {planet?.climate || "Unknown"}
            </span>
          </div>
          <div>
            <span className="font-semibold text-blue-300">Terrain:</span>
            <span className="ml-2 text-gray-100">
              {planet?.terrain || "Unknown"}
            </span>
          </div>
          <div>
            <span className="font-semibold text-blue-300">Gravity:</span>
            <span className="ml-2 text-gray-100">
              {planet?.gravity || "Unknown"}
            </span>
          </div>
          <div>
            <span className="font-semibold text-blue-300">Population:</span>
            <span className="ml-2 text-gray-100">
              {planet?.population || "Unknown"}
            </span>
          </div>
          <div>
            <span className="font-semibold text-blue-300">
              Rotation Period:
            </span>
            <span className="ml-2 text-gray-100">
              {planet?.rotation_period || "Unknown"}
            </span>
          </div>
          <div>
            <span className="font-semibold text-blue-300">Orbital Period:</span>
            <span className="ml-2 text-gray-100">
              {planet?.orbital_period || "Unknown"}
            </span>
          </div>
          <div>
            <span className="font-semibold text-blue-300">Diameter:</span>
            <span className="ml-2 text-gray-100">
              {planet?.diameter || "Unknown"}
            </span>
          </div>
          <div>
            <span className="font-semibold text-blue-300">Surface Water:</span>
            <span className="ml-2 text-gray-100">
              {planet?.surface_water || "Unknown"}
            </span>
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <Link
          to="/"
          className="text-white hover:text-blue-500 bg-slate-800 px-4 py-2 rounded-md"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
