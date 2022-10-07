export class Course {
    constructor(
         public courseName:string,
         public cost:number,
         public category:string,
         public type:string,
         public medium:string,
         public trainer?:string,
    ){}
}
