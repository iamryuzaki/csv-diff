export class AppConfig {
    public static get HasDev(): boolean {
        return process.argv[0].indexOf("node_modules") != -1 && process.argv[process.argv.length - 1] == ".";
    }
}
