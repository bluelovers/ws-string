import { Transform as r } from "stream";

import { crlf as n } from "crlf-normalize";

function transformLinebreak(t) {
  return new r({
    transform(r, e, o) {
      o(null, n(r.toString(), t));
    }
  });
}

export { transformLinebreak as default, transformLinebreak };
//# sourceMappingURL=index.esm.mjs.map
