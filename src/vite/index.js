export default function WildcardResolverVitePlugin({extensions = []}={}) {
  return {
    name: 'wildcard-resolver-vite-plugin',
    enforce: 'pre',
    resolveId(source) {
      const ext = extensions.find(e => source.endsWith(e));
      if (ext) return source;
      return null;
    },
    load(id) {
      const ext = extensions.find(e => id.endsWith(e));
      if (ext) {
        return `export default ${JSON.stringify(require('fs').readFileSync(id, 'utf-8'))};`;
      }
      return null;
    },
  };
}
