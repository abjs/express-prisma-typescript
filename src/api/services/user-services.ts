import { prisma } from "@helper";
import {
  DeleteUserType,
  UserType,
  _UserModel,
  UpdateUserType,
} from "@validations";

export class UserService {
  constructor() {}
  public async createUser({ fullName, age, email, userId }: UserType) {
    return await prisma.user.create({
      data: {
        email,
        fullName,
        age,
      },
    });
  }
  public async getUser({ userId }: { userId: string }) {
    return await prisma.user.findUnique({
      where: {
        userId,
      },
    });
  }
  async getAllUser() {
    return await prisma.user.findMany();
  }
  public async updateUser({ userId, age, fullName, email }: UpdateUserType) {
    const findUser = await prisma.user.findUnique({
      where: {
        userId,
      },
    });

    if (!findUser) {
      return {
        message: "user not found",
        status: 404,
      };
    }
    const user = await prisma.user.update({
      where: {
        userId,
      },
      data: {
        fullName,
        age,
        email,
      },
    });
    return {
      message: "user data updated successfully",
      data: user,
      status: 200,
    };
  }
  public async deleteUser({ userId }: DeleteUserType) {
    const user = await prisma.user.findUnique({
      where: {
        userId,
      },
    });
    if (!user) {
      return {
        message: "user not found",
        status: 404,
      };
    }

    await prisma.user.delete({
      where: {
        userId,
      },
    });
    return {
      message: "user deleted successfully",
      status: 200,
    };
  }
}
