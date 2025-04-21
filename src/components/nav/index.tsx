'use client'

import { Home, List, Plus, PieChart, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import TransactionModal from '../stransaction-modal'
import { useState } from 'react'

interface NavProps {
  activeTab?: string
}

export default function NavBar({ activeTab = 'home' }: NavProps) {
  const { push } = useRouter()
  const [open, setOpen] = useState(false)
  const navItems = [
    { icon: Home, label: 'Home', value: '' },
    { icon: List, label: 'Transactions', value: 'transactions' },
    { icon: Plus, label: 'Add', value: 'add' },
    { icon: PieChart, label: 'Budget', value: 'budget' },
    { icon: Settings, label: 'Account', value: 'account' },
  ]

  const handleSubmit = (data: {
    category: string
    amount: string
    date: string
  }) => {
    console.log(data)
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t md:hidden">
      <nav className="flex items-center text-primary justify-around px-4 py-2">
        {navItems.map((item, index) => {
          const Icon = item.icon
          const isCenter = index === 2 // Add button in center

          return (
            <Button
              key={item.value}
              variant="ghost"
              size="icon"
              className={cn(
                'relative flex flex-col items-center justify-center',
                isCenter &&
                  '-mt-8 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-14 w-14',
                activeTab === item.value &&
                  !isCenter &&
                  'text-primary hover:bg-primary'
              )}
              onClick={() =>
                isCenter ? setOpen(true) : push(`/${item.value}`)
              }
              aria-label={item.label}
            >
              <Icon className={cn('h-5 w-5', isCenter && 'h-6 w-6')} />
              {!isCenter && (
                <span className="hidden sm:block text-xs mt-1">
                  {item.label}
                </span>
              )}
            </Button>
          )
        })}
        <TransactionModal
          open={open}
          onOpenChange={setOpen}
          onSubmit={handleSubmit}
        />
      </nav>
    </div>
  )
}
