import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ChatbotService } from './chatbot.service';
import { Chatbot } from './entities/chatbot.entity';
import { CreateChatbotDto } from './dto/create-chatbot.input';
import { UpdateChatbotDto } from './dto/update-chatbot.input';

@Resolver(() => Chatbot)
export class ChatbotResolver {
  constructor(private readonly chatbotService: ChatbotService) {}

  @Mutation(() => Chatbot)
  createChatbot(@Args('createChatbotDto') createChatbotDto: CreateChatbotDto) {
    return this.chatbotService.create(createChatbotDto);
  }

  @Query(() => [Chatbot], { name: 'chatbot' })
  findAll() {
    return this.chatbotService.findAll();
  }

  @Query(() => Chatbot, { name: 'chatbot' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.chatbotService.findOne(id);
  }

  @Mutation(() => Chatbot)
  updateChatbot(@Args('updateChatbotDto') updateChatbotDto: UpdateChatbotDto) {
    return this.chatbotService.update(updateChatbotDto.id, updateChatbotDto);
  }

  @Mutation(() => Chatbot)
  removeChatbot(@Args('id', { type: () => Int }) id: number) {
    return this.chatbotService.remove(id);
  }
}
