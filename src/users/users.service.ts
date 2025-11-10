import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) { }


  async create(data: CreateUserDto) {
    return await this.prisma.users.create({ data });
  }

  async findAll() {
    return await this.prisma.users.findMany()
  }

  async findOne(id: number) {
    const user = await this.prisma.users.findUnique({ where: { id } })
    if (!user) throw new NotFoundException(`User ${id} not found.`)
    return user
  }

  async update(id: number, data: UpdateUserDto) {
    const user = await this.prisma.users.findUnique({ where: { id } })
    if (!user) throw new NotFoundException(`User ${id} not found.`)
    if(user.username) throw new BadRequestException("'username' can not be empty")
    if(user.role) throw new BadRequestException("'role' can not be empty")


    return await this.prisma.users.update({ where: { id }, data })
  }

  async remove(id: number) {
    const user = await this.prisma.users.findUnique({ where: { id } })
    if (!user) throw new NotFoundException(`User ${id} not found.`);

    return await this.prisma.users.delete({where:{id}})
    
  }
}
