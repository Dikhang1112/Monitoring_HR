/**
 * Helper Script: Render Dynamic JS Components into Pure Static HTML for Figma Import
 * Plays full browser JS execution and saves complete DOM (with Sidebar injected) to `rendered_html/`
 */
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const baseDir = path.join(__dirname, 'IA', 'html');
const outputDir = path.join(__dirname, 'rendered_html');

function getAllHtmlFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getAllHtmlFiles(filePath, fileList);
        } else if (file.endsWith('.html')) {
            fileList.push(filePath);
        }
    });
    return fileList;
}

(async () => {
    console.log('🚀 Starting HTML Pre-renderer for Figma Import...');
    const htmlFiles = getAllHtmlFiles(baseDir);
    
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    let count = 0;
    for (const filePath of htmlFiles) {
        const relativePath = path.relative(baseDir, filePath);
        const targetPath = path.join(outputDir, relativePath);
        const targetFolder = path.dirname(targetPath);

        if (!fs.existsSync(targetFolder)) {
            fs.mkdirSync(targetFolder, { recursive: true });
        }

        const fileUrl = `file:///${filePath.replace(/\\/g, '/')}`;
        await page.goto(fileUrl, { waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(300); // Allow sidebar.js to inject DOM

        // Get full HTML with JS DOM modifications included
        const fullContent = await page.content();
        fs.writeFileSync(targetPath, fullContent, 'utf8');
        count++;
        console.log(`   ✅ Rendered static HTML with Sidebar -> rendered_html/${relativePath}`);
    }

    await browser.close();
    console.log(`\n🎉 Done! Generated ${count} static HTML file(s) in: ${outputDir}`);
    console.log(`💡 You can now import files from 'rendered_html/' directly into Figma with complete Sidebar!`);
})();
