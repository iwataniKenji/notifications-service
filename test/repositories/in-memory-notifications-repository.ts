import { NotificationsRepository } from '../../src/application/repositories/notifications-repository';
import { Notification } from '../../src/application/entities/notification';

// simula camada de persistência (repositório)
export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  // simula banco de dados para testar feature
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
