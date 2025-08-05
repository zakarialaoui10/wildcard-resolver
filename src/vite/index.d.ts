import { Plugin } from 'vite';

export interface WildcardResolverOptions {
  extensions?: string[];
}

export default function WildcardResolverVitePlugin(options?: WildcardResolverOptions): Plugin;
