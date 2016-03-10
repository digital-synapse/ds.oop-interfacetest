
    var ILogger = {
        log: function(str){}
    };
    
    var ConsoleLogger = ds.class({               
        
        implements: ILogger,
        
        log: function(str){
            console.log(str);
        }
    });
    
    var DocumentLogger = ds.class({
        
        implements: ILogger,
        
        constructor: function() {
            this.container = document.getElementById("log");
        },
        
        log: function(str){
            var e = document.createElement('p');
            e.innerText = str;
            this.container.appendChild(e);
        }
    });
    
    var MemoryLogger = ds.class({
       
       implements: ILogger,
       
       public: {
           buffer: []
       }, 
       
       log: function(str){
           this.buffer.push(str);
       }
    });
    
    var NullLogger = ds.class({
        
        implements: ILogger,
        
        log: function(str){}
    })    
    
