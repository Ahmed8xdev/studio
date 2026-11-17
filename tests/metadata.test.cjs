const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path');
const source=fs.readFileSync(path.resolve(__dirname,'../src/app/layout.tsx'),'utf8');
test('portfolio never publishes an unverified placeholder URL',()=>{
 assert.ok(!source.includes('sanad-portfolio.com'));
 assert.ok(!source.includes('placehold.co/1200x630.png'));
});
test('OpenGraph canonical URL is optional and HTTPS-only',()=>{
 assert.ok(source.includes("NEXT_PUBLIC_SITE_URL"));
 assert.ok(source.includes("url.protocol !== 'https:'"));
 assert.ok(source.includes("metadataBase: siteOrigin ? new URL(siteOrigin) : undefined"));
 assert.ok(source.includes('url: siteOrigin'));
});
