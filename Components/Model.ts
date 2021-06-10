export interface Menu {
  id:string;
  title: string;
  item: [Food]
}

export interface Food {
  id:string;
  title: string;
  emoji: string;
  description: string;
}