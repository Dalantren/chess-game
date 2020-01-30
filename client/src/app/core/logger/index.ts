export class Logger {

    public logs: Array<string> = [];

    public log(message: string): void {
        this.logs.push(message);
    }
}
