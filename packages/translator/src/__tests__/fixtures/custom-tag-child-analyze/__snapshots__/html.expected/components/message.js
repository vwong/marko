import { write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/custom-tag-child-analyze/components/message.marko", input => {
  _write("Frank");
});

export default _renderer;
export const render = _createRenderer(_renderer);