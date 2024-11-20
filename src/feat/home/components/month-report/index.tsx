"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

interface MonthReportProps {
  data?: {
    lastWeek: {
      name: string;
      amount: number;
    }[];
    thisWeek: {
      name: string;
      amount: number;
    }[];
    nextWeek: {
      name: string;
      amount: number;
    }[];
    lastMonth: {
      name: string;
      amount: number;
    }[];
    thisMonth: {
      name: string;
      amount: number;
    }[];
    nextMonth: {
      name: string;
      amount: number;
    }[];
  };
  type?: 'week' | 'month';
}

export const MonthReport = ({
  data,
  type = 'month'
}: MonthReportProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <Tabs defaultValue={type}>
          <div className="flex items-center justify-between">
            <p>Month Report</p>
            <TabsList>
              <TabsTrigger value="week">Per Week</TabsTrigger>
              <TabsTrigger value="month">Per Month</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="week">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  data={data?.lastWeek}
                  type="monotone"
                  dataKey="amount"
                  name="Last Week"
                  stroke="#8884d8"
                />
                <Line
                  data={data?.thisWeek}
                  type="monotone"
                  dataKey="amount"
                  name="This Week"
                  stroke="#82ca9d"
                />
                <Line
                  data={data?.nextWeek}
                  type="monotone"
                  dataKey="amount"
                  name="Next Week"
                  stroke="#ffc658"
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="month">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  data={data?.lastMonth}
                  type="monotone"
                  dataKey="amount"
                  name="Last Month"
                  stroke="#8884d8"
                />
                <Line
                  data={data?.thisMonth}
                  type="monotone"
                  dataKey="amount"
                  name="This Month"
                  stroke="#82ca9d"
                />
                <Line
                  data={data?.nextMonth}
                  type="monotone"
                  dataKey="amount"
                  name="Next Month"
                  stroke="#ffc658"
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

