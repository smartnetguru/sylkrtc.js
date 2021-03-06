'use strict';

import rtcninja from 'rtcninja';
import { Connection } from './connection';


// Public API

function createConnection(options = {}) {
    if (!rtcninja.hasWebRTC()) {
        throw new Error('WebRTC support not detected');
    }

    let conn = new Connection(options);
    conn._initialize();
    return conn;
}


export {
    createConnection
};
