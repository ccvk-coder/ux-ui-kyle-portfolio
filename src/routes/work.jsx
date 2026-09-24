import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { filters, projects } from "@/data/portfolio";
import FadeIn from "@/components/FadeIn";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Enterprise systems and product design" },
      {
        name: "description",
        content:
          "Selected work: EmpireOne Unified System, GymAsura, an HR Management System, and custom business systems.",
      },
      { property: "og:title", content: "Work — Enterprise systems and product design" },
      {
        property: "og:description",
        content: "Case studies covering HR platforms, gym management, and custom business systems.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const visible =
    active === "All" ? projects : projects.filter((project) => project.tags.includes(active));

  return (
    <FadeIn>
      <PageHeader
        eyebrow="Portfolio"
        title="Work"
        description="Systems and products I've designed, with the role and tools used on each."
      />

      <div role="group" aria-label="Filter projects" className="mb-5 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={active === filter}
            onClick={() => setActive(filter)}
            className={`min-h-11 rounded-full border px-4 text-sm font-semibold transition-colors ${
              active === filter
                ? "border-border bg-surface-strong text-foreground"
                : "border-border bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <ProjectCard project={project} onOpen={setSelected} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </FadeIn>
  );
}
