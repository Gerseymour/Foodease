export interface Food {
  id:string;
  title:string;
  emoji:string;
  additionalInfo:string;
  like:boolean;
}

export interface Menu {
  id:string;
  title: string;
  items: Food[]
}

export interface MenuItem {
  id:string;
  title: string;
}

