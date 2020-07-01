
export class Party {
    constructor(
        public id: string,
        public date: string,
        public title: string,
        public partyOrt: Club,
        public imgURL: string,
        public djs: string,
        public musik: string,
        public description: string,
        public price: number,
        public organizer: string,
    ){}
}

export class Club {
    constructor(
        public id: string,
        public name: string,
        public long: number,
        public lat: number,
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

export class Organizer {
    constructor(
        public id: string,
        public firstName: string,
        public lastName: string,
    ){}
}
export class User {
constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public address: string,
    public plz: number,
    public password: string,
    public favorites: Favorites[],
){}
}

export class Person {
    constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public eMail:string,
    public tel:number,
    ){}
}


export class Favorites {
    constructor(
       public id: string,
       public firstName: string,
    ){}
}
