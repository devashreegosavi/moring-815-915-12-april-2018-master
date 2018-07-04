class Shape {
    constructor() {

    }
}

class Mobile extends Shape {
    constructor(
        private nm?: string,
        private num?: number
    ) {
        super()
    }

    whatNum(num?: string) {

    }
    whatNm(nm : string = 'android') {
        
    }
}

class Box extends Shape {

}

let mob = new Mobile()
mob.whatNum('something')


