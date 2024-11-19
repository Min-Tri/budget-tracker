'use client'

import { Avatar } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

interface BalanceCardProps {
  balance: number
}

export const BalanceCard = ({
  balance,
}: BalanceCardProps) => {
  return (
    <Card className="bg-gradient-to-r from-violet-500 to-purple-500 text-primary">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between gap-x-2">
          <div className="text-sm opacity-80">My Wallet</div>
          <div className="text-sm">See all</div></div>
        <div className="flex items-center justify-between gap-x-2">
          <div className="flex gap-2 items-center">
            <Avatar />
            <p>Cash</p>
          </div>
          <div className="text-3xl font-bold">
            ${balance.toFixed(2)}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
