import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { expenseCategories } from '@/constant'

interface TransactionModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit?: (data: {
    category: string
    amount: string
    date: string
  }) => void
}

function TransactionModal({ open, onOpenChange, onSubmit }: TransactionModalProps) {
  const [formData, setFormData] = React.useState({
    category: '',
    amount: '',
    date: new Date().toISOString().split('T')[0]
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.(formData)
    setFormData({
      category: '',
      amount: '',
      date: new Date().toISOString().split('T')[0]
    })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] h-full sm:h-fit">
        <DialogHeader>
          <DialogTitle>Add new stransaction</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-4 py-4 h-full">
          <div className="grid gap-2">
            <Select
              value={formData.category}
              onValueChange={(value) => setFormData({ ...formData, category: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {expenseCategories.map((category) => (
                  <SelectItem key={category.type} value={category.type}>
                    {category.type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Input
              type="number"
              placeholder="Enter amount"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            />
          </div>

          <div className="grid gap-2">
            <Input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>

        </form>
        <DialogFooter className='flex-row w-full h-fit gap-3'>
          <Button type="button" className='w-full' variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button type="submit" className='w-full'>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default TransactionModal