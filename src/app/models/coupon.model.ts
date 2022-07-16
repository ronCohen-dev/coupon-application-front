export class Coupon {

    constructor(
        public id ?: number,
        public title ?: string,
        public description ?: string,
        public startDate ?: Date,
        public endDate ?: Date,
        public price ?: number,
        public amount ?: number,
        public categoryId ?: string,
        public image ?: string ,
    ){}
}
