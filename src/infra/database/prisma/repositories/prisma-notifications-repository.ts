import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notifications-repository';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  // inversão de dependência
  constructor(private prismaService: PrismaService) {}

  // dados advindos de getters
  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        category: notification.category,
        content: notification.content.value,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createdAt: notification.createdAt,
      },
    });
  }
}
