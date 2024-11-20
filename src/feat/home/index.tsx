'use client'

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { BalanceCard } from "./components/balance-card"
import { History } from "./components/history"
import { MonthReport } from "./components/month-report"
import { TopSpending } from "./components/top-spending"

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

// const mockData = [
//   { id: 1, category: "Rent", amount: 1700, icon: <Home className="w-4 h-4" />, date: "2024-12-01" },
//   { id: 2, category: "Food", amount: 500, icon: <Utensils className="w-4 h-4" />, date: "2024-12-15" },
//   { id: 3, category: "Shopping", amount: 300, icon: <ShoppingBag className="w-4 h-4" />, date: "2024-12-20" },
//   { id: 4, category: "Transport", amount: 200, icon: <Car className="w-4 h-4" />, date: "2024-12-25" },
// ]

export default function HomeContainer() {
  const [isDark, setIsDark] = useState<boolean>(false)
  // const [expenses, setExpenses] = useState<Expense[]>(mockData)
  // const [sortBy, setSortBy] = useState<SortBy>("day")
  // const [newExpense, setNewExpense] = useState<NewExpense>({ category: "", amount: "", date: "" })

  // const sortedExpenses = useMemo(() => {
  //   return [...expenses].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  // }, [expenses])

  // const groupedExpenses = useMemo(() => {
  //   return sortedExpenses.reduce<Record<string, Expense[]>>((acc, expense) => {
  //     const date = new Date(expense.date)
  //     let key: string
  //     switch (sortBy) {
  //       case "day":
  //         key = date.toISOString().split('T')[0]
  //         break
  //       case "month":
  //         key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
  //         break
  //       case "year":
  //         key = date.getFullYear().toString()
  //         break
  //       default:
  //         key = date.toISOString().split('T')[0]
  //     }
  //     if (!acc[key]) {
  //       acc[key] = []
  //     }
  //     acc[key].push(expense)
  //     return acc
  //   }, {})
  // }, [sortedExpenses, sortBy])

  // const chartData: ChartData[] = useMemo(() => {
  //   return Object.entries(
  //     expenses.reduce<Record<string, number>>((acc, { category, amount }) => {
  //       acc[category] = (acc[category] || 0) + amount
  //       return acc
  //     }, {})
  //   ).map(([name, value]) => ({ name, value }))
  // }, [expenses])

  // const handleAddExpense = () => {
  //   if (newExpense.category && newExpense.amount && newExpense.date) {
  //     const iconMap: Record<string, React.ReactNode> = {
  //       "Rent": <Home className="w-4 h-4" />,
  //       "Food": <Utensils className="w-4 h-4" />,
  //       "Transport": <Car className="w-4 h-4" />,
  //       "Shopping": <ShoppingBag className="w-4 h-4" />,
  //     }
  //     setExpenses([...expenses, {
  //       ...newExpense,
  //       id: expenses.length + 1,
  //       amount: parseFloat(newExpense.amount),
  //       icon: iconMap[newExpense.category] || <ShoppingBag className="w-4 h-4" />
  //     }])
  //     setNewExpense({ category: "", amount: "", date: "" })
  //   }
  // }

  return (
    <div className={`min-h-screen w-full ${isDark ? "dark" : ""}`}>
      <div className="container mx-auto p-4 max-w-md md:max-w-2xl lg:max-w-4xl">
        <div className="flex w-full justify-between items-center" style={{ marginBottom: 24 }}>
          <h1 className="text-2xl font-bold">Budget Tracker</h1>
          <Button variant="ghost" onClick={() => setIsDark(!isDark)}>
            Toggle Theme
          </Button>
        </div>

        <div className="grid gap-4">
          {/* Balance Card */}
          {/* <Card className="bg-gradient-to-r from-violet-500 to-purple-500 text-white">
            <CardContent className="pt-6">
              <div className="text-sm opacity-80 text-primary">Total Balance</div>
              <div className="text-3xl font-bold text-primary">$32500.00</div>
              <div className="mt-4 flex gap-2">
                <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30">
                  <Plus className="w-4 h-4 mr-2" /> Add Income
                </Button>
                <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30">
                  <Wallet className="w-4 h-4 mr-2" /> Add Expense
                </Button>
              </div>
            </CardContent>
          </Card> */}

          <BalanceCard balance={22} />
          <MonthReport />
          <TopSpending />
          <History />

          {/* Main Content Tabs */}
          {/* <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full gap-2 mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="expenses">Expenses</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={sortBy} onValueChange={(value: SortBy) => setSortBy(value)}>
                    <SelectTrigger className="w-[180px] mb-4">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="day">Day</SelectItem>
                      <SelectItem value="month">Month</SelectItem>
                      <SelectItem value="year">Year</SelectItem>
                    </SelectContent>
                  </Select>
                  <ScrollArea className="h-[300px]">
                    {Object.entries(groupedExpenses).map(([date, expenses]) => (
                      <div key={date} className="mb-4">
                        <h3 className="font-semibold mb-2">{date}</h3>
                        {expenses.map((expense) => (
                          <div
                            key={expense.id}
                            className="flex items-center justify-between py-3 border-b last:border-0"
                          >
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-full bg-primary/10">{expense.icon}</div>
                              <div>{expense.category}</div>
                            </div>
                            <div className="font-semibold">-${expense.amount}</div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="expenses">
              <Card>
                <CardHeader>
                  <CardTitle>Add Expense</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <Select
                      value={newExpense.category}
                      onValueChange={(value) => setNewExpense({ ...newExpense, category: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Rent">Rent</SelectItem>
                        <SelectItem value="Food">Food</SelectItem>
                        <SelectItem value="Transport">Transport</SelectItem>
                        <SelectItem value="Shopping">Shopping</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      type="number"
                      placeholder="Amount"
                      value={newExpense.amount}
                      onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
                    />
                    <Input
                      type="date"
                      value={newExpense.date}
                      onChange={(e) => setNewExpense({ ...newExpense, date: e.target.value })}
                    />
                    <Button className="w-full" onClick={handleAddExpense}>
                      <Plus className="w-4 h-4 mr-2" /> Add Expense
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Expense Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={{}} className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsPieChart>
                          <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {chartData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <ChartTooltip content={<ChartTooltipContent />} />
                        </RechartsPieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Expenses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={{}} className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsBarChart data={chartData}>
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Bar dataKey="value" fill="#8884d8">
                            {chartData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Bar>
                          <ChartTooltip content={<ChartTooltipContent />} />
                        </RechartsBarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs> */}
        </div>
        <div className="h-14 mt-2" />
      </div>
    </div>
  )
}