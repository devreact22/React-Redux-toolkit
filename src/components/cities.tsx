import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { fetchCities } from "../redux/cities/citiesSlice";
import { useEffect, useState } from "react";

const City: React.FC = () => {
  const [cit, setCit] = useState([]);
  const dispatch = useDispatch();
  const cities = useSelector((state: RootState) => state.cities);

  useEffect(() => {
    dispatch(fetchCities()), setCit(cit);
  }, []);

  console.log("Cities");
  console.log(cities);

  return (
    <>
      <div className="grid grid-cols-4 gap-2">
        { cit.map((items: any) => (
            <div className="w-full rounded-lg shadow-md lg:max-w-sm" >
              <img
                className="object-cover w-full h-48"
                src={items.thumbnailUrl}
                alt="image"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-blue-600">
                  {items.title}
                </h4>
                {/* <p className="mb-2 leading-normal">
                            {items.content}
                            </p> */}
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                  Read more
                </button>
              </div>
            </div>
        ))}
      </div>
    </>
  );
};

export default City;
