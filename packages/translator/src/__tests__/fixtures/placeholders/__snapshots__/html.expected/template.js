import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, toString as _toString, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = ({
  x
}, _tagVar) => {
  const _scope0_ = _nextScopeId();
  _write(`${_escapeXML(x)}${_markHydrateNode(_scope0_, "#text/0")}<span>${_escapeXML(x)}${_markHydrateNode(_scope0_, "#text/1")}<div></div></span><div><div>a</div>${_escapeXML(x)}${_markHydrateNode(_scope0_, "#text/2")}Hello Text &lt;a/>${_toString(x)}${_markHydrateNode(_scope0_, "#text/3")}Hello HTML <a/><script>
    <!>Hello &lt;b> &lt;/script>
  </script></div>`);
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);