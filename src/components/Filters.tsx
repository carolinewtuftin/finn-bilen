import { Select } from "@fremtind/jkl-select-react";

type FiltersProps = {
  view: "RANDOM" | "LIST";
  setView: React.Dispatch<React.SetStateAction<"RANDOM" | "LIST">>;
};

export const Filters: React.FC<FiltersProps> = ({ view, setView }) => {
  return (
    <section className="flex justify-center gap-24 bg-background-container-high py-24 px-40 pb-40 w-fit mx-auto rounded-b-xl ">
      <Select
        name="view"
        value={view}
        /* @ts-expect-error dette er riktig */
        onChange={(e) => setView(e.target.value)}
        label="Visning"
        items={
          [
            {
              label: "Listevisning",
              value: "LIST",
            },
            {
              label: "Tilfeldig bil",
              value: "RANDOM",
            },
          ] as { label: string; value: "RANDOM" | "LIST" }[]
        }
      />
    </section>
  );
};
