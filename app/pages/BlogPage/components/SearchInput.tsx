import { Search, X } from "lucide-react";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};

const SearchInput = ({ value, onChange }: SearchInputProps) => (
  <form
    role="search"
    className="relative w-full md:max-w-sm"
    onSubmit={(event) => event.preventDefault()}
  >
    <Search
      aria-hidden
      className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
    />
    <input
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Search articles…"
      aria-label="Search articles"
      maxLength={100}
      className="h-12 w-full rounded-full border border-border/60 bg-white pl-11 pr-11 text-sm shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-primary/20 [&::-webkit-search-cancel-button]:hidden"
    />
    {value && (
      <button
        type="button"
        onClick={() => onChange("")}
        aria-label="Clear search"
        className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-neutral-100 hover:text-foreground"
      >
        <X className="h-4 w-4" />
      </button>
    )}
  </form>
);

export default SearchInput;
