import express from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbackRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router();


routes.post('/feedbacks', async (request, response) => {
    // desestruturar para ficar mais limpo
    const { type, comment, screenshot} = request.body;

    // instancia o prisma paar o costructor do SubmitFeedbackUseCase
    const prismaFeedbacksRepository = new PrismaFeedbackRepository();
    const nodemailerAdapter = new NodemailerMailAdapter()

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository,
        nodemailerAdapter
    )
    await submitFeedbackUseCase.execute({
        type: type,
        comment: comment,
        screenshot: screenshot
    })
    

    return response.status(201).send();
})