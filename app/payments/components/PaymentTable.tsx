'use client'

import { useState, useTransition } from 'react'
import type { Payment } from '../client-table/data/paymentData'

type Props = {
  data: Payment[]
}

export default function PaymentTable({ data }: Props) {
  const [sortBy, setSortBy] = useState<'date' | 'amount' | 'status'>('date')
  const [currentPage, setCurrentPage] = useState(1)
  const [isPending, startTransition] = useTransition()

  const itemsPerPage = 3

  const sorted = [...data].sort((a, b) => {
    if (sortBy === 'date') return new Date(b.date).getTime() - new Date(a.date).getTime()
    if (sortBy === 'amount') return b.amount - a.amount
    if (sortBy === 'status') return a.status.localeCompare(b.status)
    return 0
  })

  const paginated = sorted.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  function handleSort(newSort: typeof sortBy) {
    startTransition(() => setSortBy(newSort))
  }

  function changePage(page: number) {
    startTransition(() => setCurrentPage(page))
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <span>Sort by:</span>
        <button onClick={() => handleSort('date')}>Date</button>
        <button onClick={() => handleSort('amount')}>Amount</button>
        <button onClick={() => handleSort('status')}>Status</button>
        {isPending && <span className="text-sm text-gray-500 ml-2">Updating...</span>}
      </div>

      <table className="w-full text-sm border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Tenant</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Status</th>
            <th className="p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map((payment) => (
            <tr key={payment.id} className="border-t">
              <td className="p-2">{payment.tenantName}</td>
              <td className="p-2">${payment.amount}</td>
              <td className="p-2">{payment.status}</td>
              <td className="p-2">{new Date(payment.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex gap-2 mt-4">
        {[1, 2].map((page) => (
          <button
            key={page}
            className={`px-3 py-1 rounded ${page === currentPage ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
            onClick={() => changePage(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  )
}
