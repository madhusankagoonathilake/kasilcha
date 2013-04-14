var Kasilcha = {
    config: {
        'show-success-mode': false,
        'show-error-mode': false
    },
    tests: [],
    set: function(key, value) {
        this.config[key] = value;
    },
    is: function(key) {
        return (this.config[key] === true);
    },
    add: function(assertionComponent) {
        this.tests.push(assertionComponent);
    },
    tag: function(tag, attributes) {
        var element = $('<' + tag + '/>');

        if (attributes !== undefined) {
            element.attr(attributes);
        }

        return element;
    },
    content_tag: function(tag, content, attributes) {
        var element = $('<' + tag + '>' + content + '</' + tag + '>');

        if (attributes !== undefined) {
            element.attr(attributes);
        }

        return element;
    },
    log: function(message, type, description) {
        $('#console').append(this.content_tag('span', message, {
            'class': type
        })).append(this.tag('br'));

        if (description !== undefined) {
            $('#console span:last').append(this.content_tag('span', description, {
                'class': 'description'
            }).hide()).addClass('contains-description').hover(function() {
                $(this).children().show();
            }, function() {
                $(this).children().hide();
            }).append(this.tag('br'));
        }
    },
    run: function() {
        var i, result, total = 0, success = 0, failure = 0;

        for (i in this.tests) {

            result = this.tests[i].run(this);

            if (result === true) {
                success++;
                total++;
            } else if (result === false) {
                failure++;
                total++;
            }

        }

        var percentage = Math.floor((success / total) * 100);

        var summary = total + ' Tests, ' + success + ' Passed, ' + failure + ' Failed (' + percentage + '%)';
        var summaryType = (percentage === 100) ? 'success' : 'warning';

        $('#summary').append(this.content_tag('span', summary, {
            'class': summaryType
        })).append(this.tag('br'));

    },
    assertArrayHasKey: function(key, array, description) {
        var assertion = {
            run: function(context) {
                var index;
                for (index in array) {
                    if (index == key) {
                        if (context.is('show-success-mode')) {
                            context.log('Asserted that ' + key + ' exists in array', 'success');
                        }
                        return true;
                    }
                }

                context.log('Failed to assert that ' + key + ' exists in array', 'failure', description);

                return false;
            }
        };

        this.add(assertion);
    },
    assertEmpty: function(value, description) {
        var assertion = {
            run: function(context) {
                if (value !== null && value !== '') {
                    context.log('Failed to assert that ' + value + ' is empty', 'failure', description);
                    return false;
                }

                if (context.is('show-success-mode')) {
                    context.log('Asserted that ' + value + ' is empty', 'success');
                }

                return true;
            }
        };

        this.add(assertion);
    },
    assertEquals: function(expected, actual, description) {
        var assertion = {
            run: function(context) {
                if (expected !== actual) {
                    context.log('Failed asserting ' + actual + ' equals the expected value ' + expected, 'failure', description);
                    return false;
                }

                if (context.is('show-success-mode')) {
                    context.log('Asserted that ' + actual + ' is equal to ' + expected, 'success');
                }

                return true;
            }
        }

        this.add(assertion);
    },
    assertTrue: function(value, description) {
        var assertion = {
            run: function(context) {
                if (value === true) {
                    if (context.is('show-success-mode')) {
                        context.log('Asserted that ' + value + ' is true', 'success');
                    }

                    return true;
                }

                context.log('Failed asserting ' + value + ' is true', 'failure', description);
                return false;
            }
        }

        this.add(assertion);
    },
    assertFalse: function(value, description) {
        var assertion = {
            run: function(context) {
                if (value === false) {
                    if (context.is('show-success-mode')) {
                        context.log('Asserted that ' + value + ' is false', 'success');
                    }

                    return true;
                }

                context.log('Failed asserting ' + value + ' is false', 'failure', description);
                return false;
            }
        }

        this.add(assertion);
    },
    assertGreaterThan: function(compareTo, value, description) {
        var assertion = {
            run: function(context) {
                if (value > compareTo) {
                    if (context.is('show-success-mode')) {
                        context.log('Asserted that ' + value + ' is greater than ' + compareTo, 'success');
                    }

                    return true;
                }

                context.log('Failed asserting that ' + value + ' is greater than ' + compareTo, 'failure', description);
                return false;
            }
        }

        this.add(assertion);
    }
};