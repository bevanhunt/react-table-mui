import excludeDependenciesFromBundle from "rollup-plugin-exclude-dependencies-from-bundle";
import { swc } from 'rollup-plugin-swc3';

export default {
    input: './src/index.tsx',
    output: {
        file: './dist/bundle.js',
        format: 'esm'
    },
	plugins: [
        excludeDependenciesFromBundle({
            dependencies: true,
            peerDependencies: true,
        }),
        swc(),
    ]
};