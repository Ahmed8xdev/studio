const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
const Module = require('node:module');
const path = require('node:path');
const file = path.resolve(__dirname, '../src/app/actions.ts');
const js = ts.transpileModule(fs.readFileSync(file, 'utf8'), {compilerOptions: {module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022}}).outputText;
const mod = new Module(file, module);
mod.filename = file;
mod.paths = module.paths;
mod._compile(js, file);
const {submitContactForm} = mod.exports;

test('rejects names and messages containing only spaces', async () => {
  const result = await submitContactForm({name: '  ', email: 'example@example.com', message: '           '});
  assert.equal(result.success, false);
  assert.match(result.message, /valid name/i);
});

test('normalizes accidental whitespace around a valid email', async () => {
  const result = await submitContactForm({name: '  Alex User ', email: '  alex@example.com  ', message: '  Tell me about the service  '});
  assert.equal(result.success, false); // Demo has no real delivery backend.
  assert.match(result.message, /Demo preview only/);
});

test('rejects oversized messages before an email integration is used', async () => {
  const result = await submitContactForm({
    name: 'Alex User', email: 'alex@example.com', message: 'a'.repeat(4001)
  });
  assert.equal(result.success, false);
  assert.match(result.message, /valid name/i);
});
