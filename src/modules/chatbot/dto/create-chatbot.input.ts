import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateChatbotDto {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
