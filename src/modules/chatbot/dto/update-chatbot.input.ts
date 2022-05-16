import { CreateChatbotDto } from './create-chatbot.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateChatbotDto extends PartialType(CreateChatbotDto) {
  @Field(() => Int)
  id: number;
}
