import { SendNotification } from './send-notification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';

describe('Send notification', () => {
  it('should be able to send notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    // SendNotification exige repositório no constructor
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'This is notification',
      category: 'social',
      recipientId: 'example-repicientId',
    });

    // consulta array público da classe repositório
    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
