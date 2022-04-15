const options = {
    args: [
        '--no-sandbox',
        '--disable-dev-shm-usage',
        '--incognito',
    ],
    ignoreHTTPSErrors: true,
    executablePath: process.env.BROWSER_PATH,
    headless: false
}

export default options