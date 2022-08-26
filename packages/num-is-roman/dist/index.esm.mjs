function isRoman(a) {
  return /^([LCDMIVX\u2160-\u217f]+)(?![a-z\d])/iu.exec(a);
}

export { isRoman as default, isRoman };
//# sourceMappingURL=index.esm.mjs.map
