export const formatAmount=(amount)=> {
    return (
      (amount>0&&amount>=1000)
      ?((amount / 1000).toLocaleString() + 'K')
      :amount
    )
  }