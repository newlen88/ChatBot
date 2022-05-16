import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Chatbot {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
