import { build, transform } from 'esbuild';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const require=createRequire(import.meta.url);
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/abyssal');
export const sha256=data=>createHash('sha256').update(data).digest('hex');
export async function compileNative(){
 const lock=JSON.parse(readFileSync(path.join(root,'upstream-lock.json')));
 for(const [name,hash] of Object.entries(lock.files))if(sha256(readFileSync(path.join(root,'upstream',name)))!==hash)throw Error('Frozen upstream changed: '+name);
 const upstream=['quality.js','math.js','shaders.js','world.js','audio.js','main.js'].map(n=>readFileSync(path.join(root,'upstream',n),'utf8')).join('\n');
 const source=require(path.join(root,'integrate.cjs'))(upstream,root);
 const geometry=await build({entryPoints:[path.join(root,'src/geometry.js')],bundle:true,write:false,minify:true,format:'iife',target:'chrome120',legalComments:'none'});
 const runtime=await transform(`(async()=>{${source}\n})().catch(e=>{console.error(e);document.body.className='l e';document.getElementById('s').textContent='启动失败：'+e.message;});`,{minify:true,target:'es2022',legalComments:'none'});
 const licenses=readFileSync(path.join(root,'LICENSES.txt'),'utf8');
 const code='/* SPDX-License-Identifier: MIT\n'+licenses+'\n*/\n'+geometry.outputFiles[0].text+'\n'+runtime.code;
 const runtimeName='assets/'+sha256(code).slice(0,24)+'.js';
 const assets={hull:'assets/e538b877c67776fea9ef9bca.webp',music:'assets/28a23f92cfc50736772fa276.mp3'};
 const html=readFileSync(path.join(root,'template.html'),'utf8').replace('/*ASSETS*/','window.V3_ASSETS='+JSON.stringify(assets)+';').replace('/*RUNTIME*/',runtimeName);
 return {code,html,runtimeName,licenses,lock};
}
