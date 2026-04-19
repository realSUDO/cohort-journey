import { createServer } from 'node:http';
async function main() {
    const server = createServer();
    const PORT = 8080;
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
main().catch(console.error);
//# sourceMappingURL=index.js.map