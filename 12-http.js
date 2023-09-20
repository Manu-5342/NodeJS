const http = require('http')

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.end(`
        <h1> Welcome To Our Home Page </h1>
        <a href="/login"> Login page!! </a>
        `)
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    if(req.url === '/login'){
        res.end(`
        <head>
        <title>Login Form</title>
        </head>
        <body>
        <h2>Login Form</h2>
        <form id="loginForm">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required><br><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required><br><br>
            <input type="submit" value="Login">
        </form>
    
        <script>
            document.getElementById("loginForm").addEventListener("submit", function(event) {
                event.preventDefault();
    
                var username = document.getElementById("username").value;
                var password = document.getElementById("password").value;
    
            });
        </script>
        </body>
        `)
    }
    res.end(`
    <h1> Oops! </h1>
    <p> We can't seem to find what you are looking for. </p>
    <a href="/"> Back home </a>
    `)
})

server.listen(5000)