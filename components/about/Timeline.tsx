import { timeline } from "./timeline-data";
import { TimelineItem } from "./TimelineItem";

export function Timeline() {
  return (
    <div className="mt-12">
      {timeline.map((item) => (
        <TimelineItem
          key={`${item.year}-${item.title}`}
          {...item}
        />
      ))}
    </div>
  );
}