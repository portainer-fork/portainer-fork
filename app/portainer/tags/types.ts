export type TagId = number;

export interface Tag {
  ID: TagId;
  Name: string;
  Endpoints: Record<number, boolean>;
}
