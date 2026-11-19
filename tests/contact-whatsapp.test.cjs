const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),Module=require('node:module');
const ts=require('typescript');
const filename=path.join(__dirname,'../src/lib/contact-whatsapp.ts');
const code=ts.transpileModule(fs.readFileSync(filename,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
const m=new Module(filename,module);m.filename=filename;m._compile(code,filename);
const {buildContactWhatsAppDraft,PORTFOLIO_WHATSAPP_NUMBER}=m.exports;

test('validated contact details survive WhatsApp URL encoding',()=>{
  const url=new URL(buildContactWhatsAppDraft({name:'Mona & Co',email:'mona@example.org',message:'Need a project with <React> & Node.'}));
  assert.equal(url.origin,'https://wa.me');
  assert.equal(url.pathname,'/'+PORTFOLIO_WHATSAPP_NUMBER);
  assert.match(url.searchParams.get('text'),/Name: Mona & Co/);
  assert.match(url.searchParams.get('text'),/Email: mona@example.org/);
  assert.match(url.searchParams.get('text'),/with <React> & Node\./);
});

test('contact form never claims a message was automatically sent',()=>{
  const src=fs.readFileSync(path.join(__dirname,'../src/components/contact-section.tsx'),'utf8');
  assert.match(src,/onSubmit=\{form\.handleSubmit\(onSubmit\)\}/);
  assert.match(src,/onChange=\{\(\) => setDraftUrl\(null\)\}/);
  assert.match(src,/Nothing has been sent yet/);
  assert.match(src,/href=\{draftUrl\} target="_blank"/);
  assert.doesNotMatch(src,/submitContactForm/);
});
