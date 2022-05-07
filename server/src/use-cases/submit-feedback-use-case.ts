import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";
//import { PrismaFeedbacksRepository } from "../repositories/prisma/prisma-feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot: string;
}

export class SubmitFeedbackUseCase {
  // private feedbacksRepository: FeedbacksRepository;

  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) {
    // this.feedbacksRepository = feedbacksRepository;
  }

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.mailAdapter.sendMail({
      subject: "Novo feedback",
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111 ;">`,
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentario: ${comment}</p>`,
        `</div>`,
      ].join("\n"),
    });

    // MODO ACOPLADO AO PRISMA - DIFICIL TROCAR DE BANCO NO FUTURO
    //     const prismaFeedbacksRepository = new PrismaFeedbacksRepository();

    //     await PrismaFeedbacksRepository.create({
    //       type,
    //       comment,
    //       screenshot,
    //     });
  }
}
