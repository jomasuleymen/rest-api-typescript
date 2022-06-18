import pino from "pino";
import dayjs from "dayjs";
import pretty from "pino-pretty";

export default pino(
    {
        base: {
            pid: false,
        },
        timestamp: () => `, "time":"${dayjs().format("YYYY-MM-DD HH:mm")}"`,
    },
    pretty({
        colorize: true,
    })
);
