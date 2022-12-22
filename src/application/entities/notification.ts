import { Replace } from 'src/helpers/Replace';
import { Content } from './content';
import { randomUUID } from 'node:crypto';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  // props facilita passagem de dados no construtor
  constructor(
    props: Replace<NotificationProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();

    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  // getters
  public get id(): string {
    return this._id;
  }
  public get recipientId(): string {
    return this.props.recipientId;
  }
  public get content(): Content {
    return this.props.content;
  }
  public get category(): string {
    return this.props.category;
  }
  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }
  public get canceledAt(): Date | null | undefined {
    return this.props.canceledAt;
  }
  public get createdAt(): Date | null | undefined {
    return this.props.createdAt;
  }

  // setters
  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }
  public set content(content: Content) {
    this.props.content = content;
  }
  public set category(category: string) {
    this.props.category = category;
  }
  public read() {
    this.props.readAt = new Date();
  }
  public unread() {
    this.props.readAt = null;
  }
  public cancel() {
    this.props.canceledAt = new Date();
  }
}
