export interface FeedbackCreateData {
    type: string;
    comment: string;
    screenshot?: string;
}

// Quais operações podem ser feitas no banco de dados.
export interface FeedbacksRepository {
    create: (data: FeedbackCreateData) => Promise<void>; // pois é async, se não seria so void
}