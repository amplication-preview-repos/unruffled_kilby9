/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Player } from "./Player";
import { PlayerCountArgs } from "./PlayerCountArgs";
import { PlayerFindManyArgs } from "./PlayerFindManyArgs";
import { PlayerFindUniqueArgs } from "./PlayerFindUniqueArgs";
import { CreatePlayerArgs } from "./CreatePlayerArgs";
import { UpdatePlayerArgs } from "./UpdatePlayerArgs";
import { DeletePlayerArgs } from "./DeletePlayerArgs";
import { ShipFindManyArgs } from "../../ship/base/ShipFindManyArgs";
import { Ship } from "../../ship/base/Ship";
import { SquadronFindManyArgs } from "../../squadron/base/SquadronFindManyArgs";
import { Squadron } from "../../squadron/base/Squadron";
import { PlayerService } from "../player.service";
@graphql.Resolver(() => Player)
export class PlayerResolverBase {
  constructor(protected readonly service: PlayerService) {}

  async _playersMeta(
    @graphql.Args() args: PlayerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Player])
  async players(@graphql.Args() args: PlayerFindManyArgs): Promise<Player[]> {
    return this.service.players(args);
  }

  @graphql.Query(() => Player, { nullable: true })
  async player(
    @graphql.Args() args: PlayerFindUniqueArgs
  ): Promise<Player | null> {
    const result = await this.service.player(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Player)
  async createPlayer(@graphql.Args() args: CreatePlayerArgs): Promise<Player> {
    return await this.service.createPlayer({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Player)
  async updatePlayer(
    @graphql.Args() args: UpdatePlayerArgs
  ): Promise<Player | null> {
    try {
      return await this.service.updatePlayer({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Player)
  async deletePlayer(
    @graphql.Args() args: DeletePlayerArgs
  ): Promise<Player | null> {
    try {
      return await this.service.deletePlayer(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Ship], { name: "ships" })
  async findShips(
    @graphql.Parent() parent: Player,
    @graphql.Args() args: ShipFindManyArgs
  ): Promise<Ship[]> {
    const results = await this.service.findShips(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Squadron], { name: "squadrons" })
  async findSquadrons(
    @graphql.Parent() parent: Player,
    @graphql.Args() args: SquadronFindManyArgs
  ): Promise<Squadron[]> {
    const results = await this.service.findSquadrons(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
