import { Content } from '@application/entities/content';
import { Notification, NotificationProps } from '@application/entities/notification';

type Override = Partial<NotificationProps>

// método factory
export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitação de amizade'),
    recipientId: 'recipient-2',
    ...override,
  }),
}