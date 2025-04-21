'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface TopSpendingProps {
  data?: {
    week: {
      name: string
      value: number
    }[]
    month: {
      name: string
      value: number
    }[]
  }
  type?: 'week' | 'month'
}

export const TopSpending = ({ data, type = 'month' }: TopSpendingProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <Tabs defaultValue={type}>
          <div className="flex items-center justify-between">
            <p>Top Spending</p>
            <TabsList>
              <TabsTrigger value="week">Per Week</TabsTrigger>
              <TabsTrigger value="month">Per Month</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="week">
            <div className="grid gap-4">
              {data?.week?.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm font-medium">{item.name}</span>
                  <span className="text-sm font-bold">{item.value}%</span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="month">
            <div className="grid gap-4">
              {data?.month?.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm font-medium">{item.name}</span>
                  <span className="text-sm font-bold">{item.value}%</span>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
