import { SendNotification } from './send-notification';
import { Notification } from '../entities/notification';

// simula banco de dados para testar feature
const notifications: Notification[] = [];

// simula camada de persistência (repositório)
const notificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send notification', () => {
  it('should be able to send notification', async () => {
    // SendNotification exige repositório no constructor
    const sendNotification = new SendNotification(notificationsRepository);

    await sendNotification.execute({
      content: 'This is notification',
      category: 'social',
      recipientId: 'example-repicientId',
    });

    console.log(notifications);

    expect(notifications).toHaveLength(1);
  });
});
