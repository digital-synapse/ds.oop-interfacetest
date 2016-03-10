(function() {
     
    $(document).ready(function() {
        var loggers = [
            new ConsoleLogger(), 
            new DocumentLogger(), 
            new MemoryLogger(),
            new NullLogger()
        ];
        
        for (var i=0; i< loggers.length; i++){
            var logger = loggers[i];
            
            logger.log("Test Command");
            logger.log("Second Test Command");
        }
    });
})();