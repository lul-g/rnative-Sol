export type Category = {
  name: string;
  amount: number;
  type: 'expense' | 'savings';
  period: 'weekly' | 'monthly';
};
