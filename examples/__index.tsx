import type React from "react";

type ExampleRegistry = Record<string, Example>;

type Example = {
  title: string;
  code: React.LazyExoticComponent<React.FC>;
  examples: Array<{
    name: string;
    title: string;
    code: React.LazyExoticComponent<React.FC>;
  }>;
};

export const examples: ExampleRegistry = {
};
