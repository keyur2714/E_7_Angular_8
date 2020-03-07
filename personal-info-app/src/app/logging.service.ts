export class LoggingService {
    constructor(){}
    logInfo(msg : string) : void{
        console.log("INFO : "+msg);
    }
    logError(msg : string) : void{
        console.log("ERROR : "+msg);
    }
    logWarning(msg : string) : void{
        console.log("WARN : "+msg);
    }
}
