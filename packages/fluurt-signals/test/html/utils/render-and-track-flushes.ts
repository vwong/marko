import { Writable } from "stream";
import { createRenderer } from "../../../html";

export default async function renderAndTrackFlushes(test: {
  input: { [x: string]: unknown };
  default: (input: { [x: string]: unknown }) => void;
}) {
  const { input } = test;
  const output: string[] = [];
  const render = createRenderer(test.default);

  await render(input, {
    write(data: string) {
      output.push(`# write\n${indent(data)}`);
    },
    flush() {
      output[output.length - 1] += `\n_flush_`;
    },
    end(data?: string) {
      output.push(`# end${data ? `\n${indent(data)}` : ""}`);
    },
    emit(type, ...args: unknown[]) {
      output.push(`# emit ${type}${args.map(arg => `\n${indent(arg)}`)}`);
    }
  } as Writable & { flush(): void });

  return `${output.join("\n\n")}\n`;
}

function indent(data: unknown) {
  return String(data)
    .split("\n")
    .map(line => `  ${line}`)
    .join("\n");
}
