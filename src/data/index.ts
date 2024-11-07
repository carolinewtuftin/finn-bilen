export type Vehicles = {
  registrationNumber: string;
  registrationYear: string;
  brand: string;
  status?: "elektrisk" | "fossil";
};

const electricVehicles: Vehicles[] = [
  { registrationNumber: "ED62357", registrationYear: "2022", brand: "OPEL" },
];

const fuelVehicles: Vehicles[] = [
  { registrationNumber: "AE42259", registrationYear: "2014", brand: "FORD" },
];

export const cars: Vehicles[] = [...electricVehicles, ...fuelVehicles];
