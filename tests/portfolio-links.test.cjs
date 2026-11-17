const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const body=fs.readFileSync(path.resolve(__dirname,'../src/components/footer.tsx'),'utf8');
test('footer GitHub link points to the actual portfolio owner',()=>{
 assert.match(body,/https:\/\/github\.com\/Ahmed8xdev/);
 assert.ok(!body.includes('github.com/sanad-io'));
});
test('LinkedIn link uses the complete profile path',()=>{
 assert.ok(body.includes('linkedin.com/in/ahmed-mohamed-sanad-605045204/'));
 assert.ok(!body.includes('linkedin.com/in/ahmed-mohamed-sa-605045204/'));
});
test('external profiles retain safe new-tab link attributes',()=>{
 assert.ok(body.includes('rel="noopener noreferrer"'));
});
