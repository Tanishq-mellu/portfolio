import { Badge } from "@/components/ui/badge";

const skills = [
  "Quantum Cryptography",
  "Cybersecurity",
  "Network Security",
  "Python",
  "TypeScript",
  "Next.js",
  "Open Source",
  "Research",
];

export function Expertise() {
  return (
    <div className="mt-10">
      <h3 className="mb-5 text-xl font-semibold">
        Technical Expertise
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="secondary"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}