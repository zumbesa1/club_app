
export class Party {
        public id: string;
        public date: string;
        public titel: string;
        public imgURL: string;
        public description: string;
        public price: number;
        public club: Club;
        public music: Music;
        public dj: DJs;
        public organizer: Organizer;
}

export class Club {
    constructor(
        public id: string,
        public name: string,
        public longitude: number,
        public latitude: number,
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
        public id: string;
        public firstName: string;
        public lastName: string;
        public eMail: string;
        public phoneNumber: string;
        public address: string;
        public plz: number;
        public password: string;
        public favorites: Favorites;
}


export class Favorites {
    constructor(
       public id: string,
       public firstName: string,
    ){}
}
