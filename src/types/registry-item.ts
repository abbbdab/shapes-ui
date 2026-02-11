export type RegistryItem = {
  name: string;
  type: "registry:ui" | "registry:hook" | "registry:recipe";
  dependencies?: string[];
  registryDependencies?: string[];
  files: {
    path: string;
    content: string;
    type: "registry:ui";
  }[];
};

export type RegistryIndex = RegistryItem[];
