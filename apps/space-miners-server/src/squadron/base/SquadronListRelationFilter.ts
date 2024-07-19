/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SquadronWhereInput } from "./SquadronWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SquadronListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SquadronWhereInput,
  })
  @ValidateNested()
  @Type(() => SquadronWhereInput)
  @IsOptional()
  @Field(() => SquadronWhereInput, {
    nullable: true,
  })
  every?: SquadronWhereInput;

  @ApiProperty({
    required: false,
    type: () => SquadronWhereInput,
  })
  @ValidateNested()
  @Type(() => SquadronWhereInput)
  @IsOptional()
  @Field(() => SquadronWhereInput, {
    nullable: true,
  })
  some?: SquadronWhereInput;

  @ApiProperty({
    required: false,
    type: () => SquadronWhereInput,
  })
  @ValidateNested()
  @Type(() => SquadronWhereInput)
  @IsOptional()
  @Field(() => SquadronWhereInput, {
    nullable: true,
  })
  none?: SquadronWhereInput;
}
export { SquadronListRelationFilter as SquadronListRelationFilter };
