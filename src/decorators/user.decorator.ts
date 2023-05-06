import { ExecutionContext, NotFoundException, createParamDecorator } from "@nestjs/common";
import { User } from "@prisma/client";

export const LoggedUser = createParamDecorator((data: string, context: ExecutionContext): User => {
  const request = context.switchToHttp().getRequest();
  if (!request.user) {
    throw new NotFoundException();
  }

  return request.user;
})