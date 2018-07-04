import { Cam } from './exp';

class Photo {

    constructor(cam : Cam) {

    }
}

interface GpsListener {
    onGpsChange();
}

class Tempo implements GpsListener {
    onGpsChange() {
        
    }
}

let anyIntf = {
    onGpsChange() {

    }
}

let gps : GpsListener = {
    onGpsChange() {

    }    
}

gps = anyIntf
anyIntf = gps