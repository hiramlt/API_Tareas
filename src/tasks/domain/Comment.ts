export class Comment {
    constructor(
      readonly content: string,
      readonly createdBy: number,
      readonly timeStamp: string
    ) {}
  }