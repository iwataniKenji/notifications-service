import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { PrismaNotificationMapper } from '../mappers/prisma-notification-mapper';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  // inversão de dependência
  constructor(private prismaService: PrismaService) {}

  async findById(notificationId: string): Promise<Notification> {
    throw new Error('Method not implemented.');
  }

  // dados advindos de getters
  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notification.create({
      data: raw,
    });
  }

  async save(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
