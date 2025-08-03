export default function WildcardResolverVitePlugin({extensions = []}={}) {
  return {
    name: 'wildcard-resolver-vite-plugin',
    enforce: 'pre',
    transform(code, id) {
      const ext = extensions.find(e => id.endsWith(e));
      if (ext) {
        return {
            code : `
const Content = ${JSON.stringify(code)}
export default Content
            `.trim()
        }
      }
      return null;
    },
  };
}
