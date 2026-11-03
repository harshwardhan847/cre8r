import { STATS } from "~/constants";

const columns = ["Cre8r.ai", "Creator databases", "Traditional agency"];

const rows = [
  {
    label: "Creator search",
    values: [
      `AI search across ${STATS.CREATORS} profiles, with authenticity checks`,
      "Filters on public profiles",
      "Agency's roster",
    ],
  },
  {
    label: "Pricing",
    values: ["Per campaign", "Annual subscription", "Retainer + markup"],
  },
  {
    label: "Who runs it",
    values: ["You, or our team", "You", "The agency"],
  },
  {
    label: "Results per creator",
    values: [
      "Live views, reach and comment sentiment",
      "Rarely",
      "End-of-campaign deck",
    ],
  },
  {
    label: "Scale",
    values: [
      "Nano to celebrity, multi-city and regional",
      "Depends on your team",
      "Limited by roster",
    ],
  },
];

const Comparison = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <h2 className="h2 text-center mb-10 md:mb-16">Why teams move to Cre8r</h2>
        {/* Mobile: one card per row, so every column is readable without sideways scrolling. */}
        <div className="flex flex-col gap-3 md:hidden">
          {rows.map((row) => (
            <div key={row.label} className="rounded-2xl border border-border/10 bg-white p-4 shadow-sm">
              <h3 className="text-sm font-medium text-foreground">{row.label}</h3>
              <dl className="mt-3 flex flex-col gap-2 text-sm">
                {columns.map((column, i) => (
                  <div
                    key={column}
                    className={`flex flex-col gap-0.5 rounded-lg px-3 py-2 ${i === 0 ? "bg-primary/5" : ""}`}
                  >
                    <dt className={`text-xs ${i === 0 ? "font-medium text-foreground" : "text-muted-foreground"}`}>{column}</dt>
                    <dd className={i === 0 ? "text-foreground" : "text-muted-foreground"}>{row.values[i]}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
        <div className="hidden md:block overflow-x-auto rounded-2xl border border-border/10 bg-white shadow-sm">
          <table className="w-full min-w-160 text-left text-sm">
            <thead>
              <tr className="border-b border-border/10">
                <th className="p-4 md:p-5" />
                {columns.map((column, i) => (
                  <th
                    key={column}
                    scope="col"
                    className={`p-4 md:p-5 font-medium ${i === 0 ? "text-foreground bg-primary/5" : "text-muted-foreground"}`}
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-b border-border/10 last:border-0">
                  <th scope="row" className="p-4 md:p-5 font-medium text-foreground">
                    {row.label}
                  </th>
                  {row.values.map((value, i) => (
                    <td
                      key={i}
                      className={`p-4 md:p-5 leading-relaxed ${i === 0 ? "text-foreground bg-primary/5" : "text-muted-foreground"}`}
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
