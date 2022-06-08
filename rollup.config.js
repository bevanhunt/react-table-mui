import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { swc } from 'rollup-plugin-swc3';
import dts from "rollup-plugin-dts";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [{
    input: './index.ts',
    output: {
        file: './dist/index.js',
        format: 'es'
    },
	plugins: [
        peerDepsExternal(),
        swc(),
        commonjs(),
        nodeResolve(),
    ]
},{
    input: './index.ts',
    output: {
        file: './dist/index.d.ts',
        format: 'es'
    },
    plugins: [
        dts()
    ]   
}];
