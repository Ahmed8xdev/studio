const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const Module=require('node:module');
const path=require('node:path');
const ts=require('typescript');
const file=path.resolve(__dirname,'../src/lib/contact-flow.ts');
const compiled=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}});
const mod=new Module(file,module);mod.filename=file;mod._compile(compiled.outputText,file);
const {runContactSubmission}=mod.exports;
function callbacks(){
 const log=[];return {log,
 setSubmitting:b=>log.push(['busy',b]),
 notifySuccess:m=>log.push(['success',m]),
 notifyFailure:m=>log.push(['failure',m]),
 reset:()=>log.push(['reset'])
 };
}
test('successful demo submissions notify and reset, then reenable input',async()=>{
 const cb=callbacks();
 await runContactSubmission({name:'Example'},async()=>({success:true,message:'Preview'}),cb);
 assert.deepEqual(cb.log,[['busy',true],['success','Preview'],['reset'],['busy',false]]);
});
test('server validation errors keep user values and reenable input',async()=>{
 const cb=callbacks();
 await runContactSubmission({},async()=>({success:false,message:'Invalid input'}),cb);
 assert.deepEqual(cb.log,[['busy',true],['failure','Invalid input'],['busy',false]]);
});
test('rejected actions never leave the form stuck submitting',async()=>{
 const cb=callbacks();
 await runContactSubmission({},async()=>{throw Error('Offline')},cb);
 assert.equal(cb.log[0][1],true);
 assert.equal(cb.log.at(-1)[1],false);
 assert.equal(cb.log.some(([kind])=>kind==='reset'),false);
 assert.equal(cb.log.filter(([kind])=>kind==='failure').length,1);
});
