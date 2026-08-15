import { Expertise } from "./Expertise";
import { ResearchVision } from "./ResearchVision";
import { Timeline } from "./Timeline";

export function About() {
  return (
    <section
      id="about"
      className="container-page section"
    >
      <div className="grid gap-20 lg:grid-cols-2 lg:items-start">
        <div>
          <ResearchVision />

          <Expertise />
        </div>

        <Timeline />
      </div>
    </section>
  );
}