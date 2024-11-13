export interface Expense {
  id: number
  category: string
  amount: number
  icon: React.ReactNode
  date: string
}

export interface NewExpense {
  category: string
  amount: string
  date: string
}

export interface ChartData {
  name: string
  value: number
}

export type SortBy = "day" | "month" | "year"