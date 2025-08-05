import fs from "fs"
export default function WildcardResolverVitePlugin({extensions = []}={}) {
  return {
    name: 'wildcard-resolver-vite-plugin',
    enforce: 'pre',
    transform(code, id) {
      const ext = extensions.find(e => id.endsWith(e));
      if (ext) {
<<<<<<< HEAD
         const content = fs.readFileSync(id, 'utf-8');
         console.log(content)
        return `export default function A(){}`
        // return `export default ${JSON.stringify(require('fs').readFileSync(id, 'utf-8'))};`;
=======
        return {
            code : `
const Content = ${JSON.stringify(code)}
export default Content
            `.trim()
        }
>>>>>>> 9e80aa11cc09e74a53c43552a3f20466803f6243
      }
      return null;
    },
  };
}
