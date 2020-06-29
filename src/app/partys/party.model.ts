export class Party {
    constructor(
        public id: string,
        public date: string,
        public title: string,
        public partyOrt: string,
        public imgURL: string,
        public djs: string,
        public musik: string,
        public description: string,
        public price: number,
    ){}
}

export class DJs {
    constructor(
        public id: string,
        public name: string,
    ){}
}
export class Music {
    constructor(
        public id: string,
        public name: string,
    ){}
}
