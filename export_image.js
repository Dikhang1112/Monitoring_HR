const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

// Helper function to recursively find all .html files in a directory
function getAllHtmlFiles(dirPath, arrayOfFiles = []) {
    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            // Ignore images directory or node_modules
            if (file !== 'images' && file !== 'node_modules') {
                getAllHtmlFiles(fullPath, arrayOfFiles);
            }
        } else if (file.endsWith('.html')) {
            arrayOfFiles.push(fullPath);
        }
    });

    return arrayOfFiles;
}

(async () => {
    console.log('🚀 Starting Playwright HTML-to-Image Exporter...');

    // Base HTML directory and Output directory setup
    const iaHtmlDir = path.resolve(__dirname, 'IA/html');
    const outputDir = path.resolve(__dirname, 'ui_ux');

    if (!fs.existsSync(iaHtmlDir)) {
        console.error(`❌ HTML directory not found at: ${iaHtmlDir}`);
        process.exit(1);
    }

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
        console.log(`📁 Created output folder: ${outputDir}`);
    }

    // Discover all .html files dynamically
    const htmlFiles = getAllHtmlFiles(iaHtmlDir);
    console.log(`🔍 Found ${htmlFiles.length} HTML file(s) to export:\n`);
    htmlFiles.forEach((file, index) => {
        console.log(`   ${index + 1}. ${path.relative(__dirname, file)}`);
    });
    console.log('');

    // Launch Chromium Browser in Headless mode
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
        viewport: { width: 1920, height: 1080 },
        deviceScaleFactor: 2 // High Resolution / Retina quality
    });
    const page = await context.newPage();

    let successCount = 0;

    for (const filePath of htmlFiles) {
        const fileBasename = path.basename(filePath, '.html');
        const outputImagePath = path.join(outputDir, `${fileBasename}.png`);
        const fileUrl = `file:///${filePath.replace(/\\/g, '/')}`;

        try {
            console.log(`📸 Exporting: [${fileBasename}] ...`);
            await page.goto(fileUrl, { waitUntil: 'networkidle', timeout: 30000 });

            // Small delay to ensure all CSS fonts and dynamic JS render properly
            await page.waitForTimeout(600);

            // Capture Full Page Screenshot
            await page.screenshot({
                path: outputImagePath,
                fullPage: true,
                type: 'png'
            });

            console.log(`   ✅ Saved -> ${path.relative(__dirname, outputImagePath)}`);
            successCount++;
        } catch (err) {
            console.error(`   ❌ Failed to export [${fileBasename}]:`, err.message);
        }
    }

    await browser.close();

    console.log(`\n🎉 Done! Successfully exported ${successCount}/${htmlFiles.length} image(s) to:`);
    console.log(`📂 ${outputDir}`);
})();
