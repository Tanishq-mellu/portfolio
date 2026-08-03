import { Grid } from "./Grid";
import { Glow } from "./Glow";
import { Nodes } from "./Nodes";
import { ConnectionLines } from "./ConnectionLines";
import { Noise } from "./Noise";

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <Grid />
      <ConnectionLines />
      <Nodes />
      <Glow />
      <Noise />
    </div>
  );
}

export function Background() {
  return (
    <div
      className="
        fixed
        inset-0
        -z-10
        overflow-hidden
      "
    >
      <Grid />
      <Glow />
    </div>
  );
}