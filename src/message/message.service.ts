import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from 'src/schema/message.schema';

@Injectable()
export class MessageService {
    constructor(
        @InjectModel(Message.name) private messageModel: Model<Message>,
    ) {}

    async create(message: { user: string; text: string}): Promise<Message | null> {
        const createdMessage = new this.messageModel(message);
        return createdMessage.save();
    }

}