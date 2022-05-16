import { Module } from '@nestjs/common';
import { ChatbotService } from './chatbot.service';
import { ChatbotResolver } from './chatbot.resolver';
import { ChatbotController } from './chatbot.controller';

@Module({
  providers: [ChatbotResolver, ChatbotService],
  controllers: [ChatbotController],
})
export class ChatbotModule {}
