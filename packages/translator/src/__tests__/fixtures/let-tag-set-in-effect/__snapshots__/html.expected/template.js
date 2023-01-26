import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope0_ = _nextScopeId();
  const x = 1;
  const y = 0;
  _write(`<span>${_escapeXML(x)}${_markHydrateNode(_scope0_, "#text/0")}</span><span>${_escapeXML(y)}${_markHydrateNode(_scope0_, "#text/1")}</span>`);
  _writeHydrateCall(_scope0_, "packages/translator/src/__tests__/fixtures/let-tag-set-in-effect/template.marko_0_x");
  _writeHydrateScope(_scope0_, {
    "x": x
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);