import { useDispatch } from "react-redux";
import { fetchCities } from "../redux/cities/citiesSlice";
import { useEffect, useState } from "react";

interface Cities {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const City: React.FC = () => {
  const [cities, setCities] = useState<Cities[]>([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCities()) // Dispatch fetch action directly
      .then((data: any) => {setCities(data.payload), setLoading(false); }) // Update state with fetched data
      .catch((error: any) => console.error("Error fetching cities:", error));
  }, []);

  console.log("Cities", cities);

  return (
    <>
    {loading ? (
      <div className="text-center p-4 m-4">Loading cities...</div>
      ) : (
      <div className="grid grid-cols-4 gap-4 text-black m-4">
        {cities.map((city: Cities, key) => (
          <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
            <img
              className="object-cover w-full h-48"
              src={city.thumbnailUrl}
              alt="image"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600 ">
                {city.title}
              </h4>
              <p className="mb-2 leading-normal">{city.title}</p>
              <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
      )}
    </>
  );
};

export default City;
