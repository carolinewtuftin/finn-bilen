import { useState } from "react";
import { List } from "./components/List";
import { Random } from "./components/Random";
import { cars } from "./data";
import { Filters } from "./components/Filters";

export type Status = "elektrisk" | "fossil" | "alle";

export type Filters = {
  status: Status;
};

function App() {
  const [view, setView] = useState<"RANDOM" | "LIST">("RANDOM");

  return (
    <>
      <Filters view={view} setView={setView} />
      <main className="container max-w-[1440px] mx-auto flex items-center justify-center mt-40">
        {view === "RANDOM" && <Random cars={cars} />}
        {view === "LIST" && <List cars={cars} />}
      </main>
    </>
  );
}
export default App;
