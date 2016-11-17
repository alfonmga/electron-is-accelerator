import test from 'ava';
import isAccelerator from '.';

const keys = [
    '0',
    '1',
    '9',
    'A',
    'G',
    'Z',
    'F1',
    'F5',
    'F24',
    '~',
    '!',
    '@',
    '#',
    'Plus',
    'Space',
    'Tab',
    'Backspace',
    'Delete',
    'Insert',
    'Return',
    'Enter',
    'Up',
    'Down',
    'Left',
    'Right',
    'Home',
    'End',
    'PageUp',
    'PageDown',
    'Escape',
    'Esc',
    'VolumeUp',
    'VolumeDown',
    'VolumeMute',
    'MediaNextTrack',
    'MediaPreviousTrack',
    'MediaStop',
    'MediaPlayPause',
    'PrintScreen'
];

const modifiers = [
    'Command',
    'Cmd',
    'Control',
    'Ctrl',
    'CommandOrControl',
    'CmdOrCtrl',
    'Alt',
    'Option',
    'AltGr',
    'Shift',
    'Super'
];

test('multiple modifier', t => t.true(isAccelerator('CommandOrControl+Shift+Z')));
test('multiple keys', t => t.false(isAccelerator('A+Z')));

// tests to check each modifiers
modifiers.forEach(mod => test(
    mod + ' modifier',
    t => t.true(
        isAccelerator(mod + '+A')
    )
));

// tests to check all keys
keys.forEach(key => test(
    key + ' key',
    t => t.true(
        isAccelerator(key)
    )
));


// tests to check every combination of modifier and key
modifiers.forEach(mod =>
    keys.forEach(key => test(
        `${mod}+${key} sequence`,
        t => t.true(
            isAccelerator(`${mod}+${key}`)
        )
    ))
);
