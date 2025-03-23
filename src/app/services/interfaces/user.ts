export interface IUser {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: [IData];
}

export interface IData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
