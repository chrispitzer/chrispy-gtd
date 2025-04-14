require('esbuild').build({
    entryPoints: ['src/main.js'],
    bundle: true,
    outfile: 'main.js',
    format: 'cjs',
    target: ['es2020'],
    external: ['obsidian'],
    logLevel: 'info'
}).catch(() => process.exit(1));
