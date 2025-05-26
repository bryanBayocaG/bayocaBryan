import { techStack } from "../data/data";

export const resolveTechItems = (names: string[]) =>
  techStack.filter((tech) => names.includes(tech.name));
