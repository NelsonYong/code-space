import { DefaultTheme } from "vitepress";
import algorithm_route from "./algorithm";
import data_structure_route from "./data-structure";
import javascript_route from "./javascript";

export default {
  "/data-structure": data_structure_route,
  "/algorithm": algorithm_route,
  "/javascript": javascript_route
} as DefaultTheme.Config['sidebar']