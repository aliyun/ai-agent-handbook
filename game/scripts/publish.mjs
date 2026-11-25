// Rebuild only chapter two and its renderer-independent host. Never touch other chapters.
import { build } from 'esbuild';
import { readFileSync, writeFileSync, existsSync, unlinkSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { compileNative, sha256 } from './native.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..'),dir=path.join(root,'public/games');
const manifestPath=path.join(dir,'release.json'),manifest=JSON.parse(readFileSync(manifestPath));
const obsolete=[];
for(const name of ['audit-sea.html','abyssal-sea.html'])if(existsSync(path.join(dir,name))){const match=readFileSync(path.join(dir,name),'utf8').match(/<script defer src="(assets\/[^\"]+\.js)"><\/script>/);if(match)obsolete.push(match[1]);}
const host=await build({entryPoints:[path.join(root,'game/src/sea/host.js')],bundle:true,write:false,minify:true,format:'iife',target:'chrome110',legalComments:'none'});
const hostCode=host.outputFiles[0].text,hostName='assets/'+sha256(hostCode).slice(0,24)+'.js';
const native=await compileNative();
for(const [name,data] of [[hostName,hostCode],[native.runtimeName,native.code]]){writeFileSync(path.join(dir,name),data);manifest.assets[name]={publishedSHA256:sha256(data),bytes:Buffer.byteLength(data),kind:'runtime'};}
const notice='assets/'+sha256(native.licenses).slice(0,24)+'.txt';
writeFileSync(path.join(dir,notice),native.licenses);manifest.assets[notice]={publishedSHA256:sha256(native.licenses),bytes:Buffer.byteLength(native.licenses),kind:'license'};
const hostHTML=readFileSync(path.join(root,'game/src/sea/host.html'),'utf8').replace('/*RUNTIME*/',hostName);
for(const [name,data] of [['audit-sea.html',hostHTML],['abyssal-sea.html',native.html]]){writeFileSync(path.join(dir,name),data);manifest.files[name]={sourceSHA256:sha256(data),publishedSHA256:sha256(data),bytes:Buffer.byteLength(data)};}
for(const name of obsolete)if(![hostName,native.runtimeName].includes(name)){if(existsSync(path.join(dir,name)))unlinkSync(path.join(dir,name));delete manifest.assets[name];}
manifest.version='v24';manifest.runtime.renderer='native WebGPU';manifest.runtime.nativeNotice=notice;
manifest.secondChapter={entry:'abyssal-sea.html',host:'audit-sea.html',renderer:'native WebGPU',upstream:native.lock.repository,commit:native.lock.commit,landmarks:['castle','lighthouse','wreck'],targets:{pearl:20,shell:12},completion:'full hull leaves the castle arch after both collection targets',lighting:{purpleScatter:[.22,.50,.66],exposure:.54,rays:.32,bloom:[.035,.015]}};
const change='v24: second chapter replaces WebGL with the pinned Abyssal Garden native WebGPU world, full water/caustics/volume/shadow pipeline and the approved castle, mist lighthouse and reef wreck in separate seas; preserves 20 pearls + 12 shells, visible locked gate, full-hull passage success, original music, exterior/cockpit views and touch controls; all chapters are lazy independent host layers, unsupported WebGPU can return to the map, and large runtime/images are external hash-named assets.';
manifest.changes=manifest.changes.filter(line=>!line.startsWith('v24:'));manifest.changes.push(change);
manifest.assets=Object.fromEntries(Object.entries(manifest.assets).sort(([a],[b])=>a.localeCompare(b)));
writeFileSync(manifestPath,JSON.stringify(manifest,null,2)+'\n');
console.log({version:manifest.version,hostBytes:Buffer.byteLength(hostHTML),nativeHTMLBytes:Buffer.byteLength(native.html),nativeRuntimeBytes:Buffer.byteLength(native.code)});
