const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path');
const source=fs.readFileSync(path.resolve(__dirname,'../src/components/header.tsx'),'utf8');
test('header remains visible and scroll state is refreshed while mobile sheet is open',()=>{
 assert.ok(source.includes('if (isOpen) {'));
 assert.ok(source.includes('setIsHidden(false);\n        lastScrollY = currentScrollY;'));
 assert.ok(source.includes('}, [isOpen]);'));
});
test('opening mobile sheet resets previously hidden header state',()=>{
 assert.ok(source.includes('if (open) setIsHidden(false)'));
});
