$(document).ready(function() {

    with (Kasilcha) {
        set('show-success-mode', true);
        
        assertEquals(1, 1);
        assertEquals(1, 2, 'This is a sample test, meant to be failed.');
        
        assertArrayHasKey(1, ['a', 'b', 'c']);
        assertArrayHasKey('b', { a: 1, b: 2, c: 3});
        assertArrayHasKey(10, ['a', 'b', 'c'], 'This test is also meant to be failed');
        assertArrayHasKey('p', { a: 1, b: 2, c: 3});
        
        assertEmpty(null);
        assertEmpty('');
        assertEmpty(' ', 'Space should not be intepreted as empty');
        assertEmpty(0, 'Zero should not be intepreted as empty');
        assertEmpty(1);

        assertTrue(true);
        assertTrue(false);
        assertTrue(1, '1 should not be intepreted as true');
        assertTrue('', 'An empty string should not be intepreted as true.');
        assertTrue('abc', 'A non-empty string should not be intepreted as true.');
        assertTrue(25, 'A positive integer should not be intepreted as true.');
        assertTrue(0, 'Zero should not be intepreted as true.');
        assertTrue(-30, 'A negative integer should not be intepreted as true.');

        assertFalse(false);
        assertFalse(true);
        assertFalse(1, '1 should not be intepreted as false');
        assertFalse('', 'An empty string should not be intepreted as false');
        assertFalse('abc', 'A non-empty string should not be intepreted as false');
        assertFalse(25, 'A positive integer should not be intepreted as false');
        assertFalse(0, 'Zero should not be intepreted as false');
        assertFalse(-30, 'A negative integer should not be intepreted as false');

        run();
    }
});
