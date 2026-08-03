import { Grid } from "./Grid";
import { Glow } from "./Glow";

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