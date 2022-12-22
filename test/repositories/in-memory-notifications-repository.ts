import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { Notification } from '@application/entities/notification';

// simula camada de persistência (repositório)
export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  // simula banco de dados para testar feature
  public notifications: Notification[] = [];

  async findById(notificationId: string): Promise<Notification> {
    const notification = this.notifications.find(
      (item) => item.id === notificationId,
    );

    if (!notification) {
      return null;
    }

    return notification;
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    return this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    ).length;
  }

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      (item) => item.id === notification.id,
    );

    // sobrepõe notificação
    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification;
    }
  }
}
