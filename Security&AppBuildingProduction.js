// SECURITY AND BUILDING FOR PRODUCTION
// 1. CHROME DEV TOOLS and SECURITY
// 2. SECURITY and the eval() Function
// 3. Preventing Man-in-the-middle
// 4. Cross-site Scripting (XSS)
// 5. Building your app for production

// 1. CHROME DEV TOOLS and SECURITY
  // 1. Don't store passwords, secrets or other sensitive information
  // 2. Don't use global variables
  // 3. Assume hackers can read your JS code and access all data sent to a browser

// 2. SECURITY and the eval() Function
// avoid eval function ! 
// let inputString = console.log('hello');
// eval(inputString):


// 3. Preventing Man-in-the-middle attacks
// Use SSL
// Use HTTP Header: Strict-Transport-Security
// Use cookies attributes: Secure and HttpOnly

// 4. Cross-site Scripting (XSS) attacks
// CSP : Content Security Policy 
//   use HTTP Header: Content-Security-Policy
// CORS: Cross Origin Resource Sharing
//   use HTTP Header: Access-Control-Allow-Origin

// 5. Building your app for production
// In terminal : 
// npm run build => dist folder 
