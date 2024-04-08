const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url === "/poem") {
        // Read the file content
        fs.readFile("./poem.txt", 'utf-8', (err, data) => {
            if (err) {
                console.log("Error reading the file:", err);
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
            } else {
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
