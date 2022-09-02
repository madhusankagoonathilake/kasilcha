const add = (a, b) => a + b;
const substract = (a, b) => a - b;

$(document).ready(function() {

    with (Kasilcha) {
        set('show-success-mode', true);
        
        assertEquals(5, add(2, 3));
        assertEquals(-1, substract(2, 3));
        
        run();
    }
});
