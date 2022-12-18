import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'This is notification',
      category: 'social',
      recipientId: 'example-repicientId',
    });

    expect(notification).toBeTruthy();
  });
});
