import { ReactElement } from "react";

export interface AppPlugin {
  name: string;
  component: () => ReactElement;
}
