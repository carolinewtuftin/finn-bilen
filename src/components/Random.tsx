import { useEffect, useState } from "react";
import type { Vehicles as VehicleType } from "../data";
import { PrimaryButton, SecondaryButton } from "@fremtind/jkl-button-react";

import { formatFodselsnummer } from "@fremtind/jkl-formatters-util";

type RandomProps = {
  cars: VehicleType[];
};

export const Random: React.FC<RandomProps> = ({ cars }) => {
  const [car, setCar] = useState(cars[Math.floor(Math.random() * cars.length)]);

  useEffect(() => {
    const onEnter = (e: KeyboardEvent) => {
      console.log(e.key);
      if (e.key === " ") {
        navigator.clipboard.writeText(car.registrationNumber);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      }
    };
    const onSpace = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        setCar(cars[Math.floor(Math.random() * cars.length)]);
        setCopied(false);
      }
    };

    window.addEventListener("keyup", (e: KeyboardEvent) => {
      onEnter(e);
      onSpace(e);
    });
  }, [cars, car]);

  useEffect(() => {
    setCar(cars[Math.floor(Math.random() * cars.length)]);
  }, [cars]);
  const [copied, setCopied] = useState(false);

  if (cars.length === 0) return <p>Ingen biler</p>;

  return (
    <div className="bg-background-container-low py-40 px-40 rounded-xl flex flex-col gap-24 items-center mt-[128px]">
      <h1 className="title">{car.brand}</h1>
      <input
        className="p-24 text-center border-background-action border-2 rounded-xl heading-2 text-text-default w-[380px]"
        data-theme="light"
        readOnly
        value={
          copied
            ? "Kopiert til utklippstavlen"
            : formatFodselsnummer(car.registrationNumber)
        }
        onKeyUp={(e) => {
          if (e.key === " ") {
            navigator.clipboard.writeText(car.registrationNumber);
            setCopied(true);

            setTimeout(() => {
              setCopied(false);
            }, 2000);
          }
        }}
        onClick={() => {
          navigator.clipboard.writeText(car.registrationNumber);
          setCopied(true);

          setTimeout(() => {
            setCopied(false);
          }, 2000);
        }}
      />
      <div className="flex gap-24">
        <PrimaryButton
          onClick={() => {
            setCar(cars[Math.floor(Math.random() * cars.length)]);
            setCopied(false);
          }}
        >
          Ny bil
        </PrimaryButton>
        <SecondaryButton
          onClick={() => {
            navigator.clipboard.writeText(car.registrationNumber);
            setCopied(true);

            setTimeout(() => {
              setCopied(false);
            }, 2000);
          }}
        >
          Kopier til utklippstavlen
        </SecondaryButton>
      </div>
    </div>
  );
};
