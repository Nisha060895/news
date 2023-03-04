export class Card {
    title: string;
    postUrl: string;
    publishedAt: string;
    postImageUrl: string;
    readTime: string;
    primaryTag: string;
    content: string;
}

export class CardList {
    record: Card[];
    metadata: Object;
}