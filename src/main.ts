import 'reflect-metadata';
import { error } from './helpers/log';
import { PORT, HOST } from './helpers/params';
import Server from './Server';

const main = async (): Promise<void> => {
    try {
        const server = new Server(HOST, PORT);
        await server.run();
    } catch (err) {
        error(err.message);
        process.exit(1);
    }
};

main();
