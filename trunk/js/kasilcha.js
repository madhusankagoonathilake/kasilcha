var Kasilcha = {
    tests: [],
    add: function(assertion) {
        this.tests.push(assertion);
    },
    run: function() {
        var i, result, total = 0, success = 0, failure = 0;
        
        for (i in this.tests) {
            
            result = this.tests[i].run();
            
            if (result === true) {
                success++;
            } else {
                failure++;
            }
            
            total++;
        }
        
        $('#console').prepend('<span class="info">' + total + ' Tests, ' + success + ' Passed, ' + failure +' Failed.</span><br />');
    },
    equals: function(expected, actual, message) {
        var assertion = {
            run: function() {
                if (expected !== actual) {
                    if (message === undefined) {
                        message = 'Failed asserting ' + expected + ' equals ' + actual;
                    }
                    $('#console').append('<span class="failure">' + message + '</span><br />');
                    return false;
                }
                
                return true;
            }
        }
        
        return assertion;
    }
};