import { Car } from "./Car";
import type { Vehicles as VehicleType } from "../data";
type ListProps = {
  cars: VehicleType[];
};

export const List: React.FC<ListProps> = ({ cars }) => {
  return (
    <div>
      <ul className="flex flex-wrap gap-40 justify-center">
        {cars.map((car, index) => (
          <Car key={index} car={car} />
        ))}
      </ul>
    </div>
  );
};
