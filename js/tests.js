$(document).ready(function() {
    with (Kasilcha) {
            add(equals(5, 5));
            add(equals(5, 6));
            add(equals('abc', 'abc'));
            add(equals('abc', 'AbC'));
            add(equals('abc', 'pqr'));
            
            run();
    }
});