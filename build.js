require('esbuild').build({
    entryPoints: ['src/main.tsx'],
    bundle: true,
    outfile: 'main.js',
    format: 'cjs',
    target: ['es2020'],
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    loader: {
        '.js': 'jsx',
        '.jsx': 'jsx',
        '.ts': 'ts',
        '.tsx': 'tsx',
    },
    external: ['obsidian'],
    logLevel: 'info'
}).catch(() => process.exit(1));
