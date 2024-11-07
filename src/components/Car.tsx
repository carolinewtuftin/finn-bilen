import { useState } from "react";
import type { Vehicles as VehicleType } from "../data";

export const Car = ({ car }: { car: VehicleType }) => {
  const [hasCopied, setHasCopied] = useState(false);

  return (
    <button
      className="p-40 border-border-separator border-2 rounded-xl w-[300px] bg-background-container-low"
      onClick={() => {
        navigator.clipboard.writeText(car.registrationNumber);
        setHasCopied(true);

        setTimeout(() => {
          setHasCopied(false);
        }, 2000);
      }}
    >
      <li className="flex-col gap-8 flex">
        <p className="heading-4">{car.brand}</p>
        {hasCopied ? (
          <p>Kopiert til utklippstavlen</p>
        ) : (
          <p className="font-bold">{car.registrationNumber}</p>
        )}
      </li>
    </button>
  );
};
