import pino from 'pino';

const basePath = `${process.cwd()}/logs/info.log`;
        
const streams = [
    { stream : process.stdout },
    { stream : pino.destination(basePath)}
]
const traceLogger = pino({level: 'info'}, pino.multistream(streams));

export default traceLogger;