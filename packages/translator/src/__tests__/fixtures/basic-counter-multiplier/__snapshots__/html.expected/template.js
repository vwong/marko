import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const count = 0;
  const multiplier = 1;
  const multipliedCount = count * multiplier;
  _write(`<button id=multiplier>increase multiplier (<!>${_escapeXML(multiplier)}${_markHydrateNode(_scope0_id, "#text/1")})</button>${_markHydrateNode(_scope0_id, "#button/0")}<button id=count>increase count</button>${_markHydrateNode(_scope0_id, "#button/2")}<div>${_escapeXML(multipliedCount)}${_markHydrateNode(_scope0_id, "#text/3")}</div>`);
  _writeHydrateCall(_scope0_id, "packages/translator/src/__tests__/fixtures/basic-counter-multiplier/template.marko_0_count");
  _writeHydrateCall(_scope0_id, "packages/translator/src/__tests__/fixtures/basic-counter-multiplier/template.marko_0_multiplier");
  _writeHydrateScope(_scope0_id, {
    "count": count,
    "multiplier": multiplier
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/basic-counter-multiplier/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);