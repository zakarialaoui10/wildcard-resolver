import WildcardResolverVitePlugin from "../vite/index.js";
const AstroWildcardResolver = ({extensions = []} = {}) => ({
    name: "astro-wildcard-resolvee",
    hooks: {
        "astro:config:setup": async ({ updateConfig }) => {
          updateConfig({
            vite : {
              plugins : [
                WildcardResolverVitePlugin({extensions})
              ]
            }
          })
        },
    },
});
export default AstroWildcardResolver;