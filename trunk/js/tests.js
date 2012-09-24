$(document).ready(function() {

    with (Kasilcha) {
        set('show-success-mode', true);
        
        assertEquals(1, 1);
        assertEquals(1, 2, 'This is a sample test, meant to be failed.');
        
        assertArrayHasKey(1, ['a', 'b', 'c']);
        assertArrayHasKey('b', { a: 1, b: 2, c: 3});
        assertArrayHasKey(10, ['a', 'b', 'c'], 'This test is also meant to be failed');
        assertArrayHasKey('p', { a: 1, b: 2, c: 3});
        run();
    }
});
