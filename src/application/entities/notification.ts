import { Content } from './content';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private props: NotificationProps;

  // props facilita passagem de dados no construtor
  constructor(props: NotificationProps) {
    this.props = props;
  }

  // getters
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
  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }
}
