import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, BriefcaseBusiness, Search, X } from "lucide-react";
import { nav, projects } from "@/data/portfolio";

const searchableItems = [
  ...nav.map(({ to, label, icon }) => ({
    to,
    label,
    description: `${label} page`,
    icon,
    keywords: label,
  })),
  ...projects.map((project) => ({
    to: "/work",
    label: project.name,
    description: project.category,
    icon: BriefcaseBusiness,
    keywords: `${project.name} ${project.category} ${project.tags.join(" ")} ${project.summary}`,
  })),
];

const GlobalSearch = () => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const searchRef = useRef(null);

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return nav.slice(0, 6).map(({ to, label, icon }) => ({
      to,
      label,
      description: `${label} page`,
      icon,
    }));

    return searchableItems
      .filter((item) => item.keywords.toLowerCase().includes(term))
      .slice(0, 6);
  }, [query]);

  useEffect(() => {
    const handleShortcut = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        searchRef.current?.focus();
        setOpen(true);
      }
      if (event.key === "Escape") {
        setOpen(false);
        searchRef.current?.blur();
      }
    };

    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  const closeSearch = () => {
    setQuery("");
    setOpen(false);
  };

  return (
    <div className="sticky top-3 z-30 mb-5 lg:top-6">
      <div className="glass relative flex min-h-14 items-center gap-3 px-4 py-2.5">
        <Search aria-hidden="true" className="size-5 shrink-0 text-accent" />
        <label htmlFor="portfolio-search" className="sr-only">
          Search portfolio
        </label>
        <input
          ref={searchRef}
          id="portfolio-search"
          type="search"
          value={query}
          autoComplete="off"
          placeholder="Search pages, projects, and expertise..."
          className="min-w-0 flex-1 bg-transparent text-sm font-medium text-foreground outline-hidden placeholder:text-muted-foreground"
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => window.setTimeout(() => setOpen(false), 150)}
        />
        {query ? (
          <button
            type="button"
            aria-label="Clear search"
            className="grid size-9 shrink-0 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => {
              setQuery("");
              searchRef.current?.focus();
            }}
          >
            <X aria-hidden="true" className="size-4" />
          </button>
        ) : (
          <span className="hidden shrink-0 rounded-md border border-border bg-muted px-2 py-1 text-[0.625rem] font-bold text-muted-foreground sm:inline-flex">
            CTRL K
          </span>
        )}

        {open && (
          <div className="glass absolute inset-x-0 top-[calc(100%+0.5rem)] overflow-hidden p-2" role="listbox">
            <p className="px-3 py-2 text-[0.6875rem] font-semibold uppercase text-muted-foreground">
              {query ? "Search results" : "Quick navigation"}
            </p>
            {results.length > 0 ? (
              <div className="grid gap-1">
                {results.map(({ to, label, description, icon: Icon }, index) => (
                  <Link
                    key={`${to}-${label}-${index}`}
                    to={to}
                    onClick={closeSearch}
                    className="grid min-h-12 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-md px-3 py-2 text-foreground transition-colors hover:bg-surface-strong"
                  >
                    <span className="grid size-8 shrink-0 place-items-center rounded-md bg-muted text-accent">
                      <Icon aria-hidden="true" className="size-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold">{label}</span>
                      <span className="block truncate text-xs text-muted-foreground">{description}</span>
                    </span>
                    <ArrowUpRight aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            ) : (
              <p className="px-3 py-5 text-center text-sm text-muted-foreground">
                No matching pages or projects.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GlobalSearch;