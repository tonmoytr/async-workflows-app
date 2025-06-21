

import PaymentTable from '../components/PaymentTable'
import { payments } from './data/paymentData'

export default function PaymentsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Client-Side Payments</h1>
      <PaymentTable data={payments} />
    </main>
  )
}
