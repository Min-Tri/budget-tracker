import Head from 'next/head'
import Image from 'next/image'
import { AddBtn } from '../components/AddBtn'
import { Balance } from '../components/Balance'
import { IncomeExpenses } from '../components/IncomeExpenses'
import Navbar from '../components/Navbar'
import { TransactionList } from '../components/TransactionList'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Budget tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar/>
      </header>

      <main className="flex flex-col w-full flex-1 px-8 text-center">
        <div className='flex '>
          <Balance/>
          <AddBtn/>
        </div>
        <IncomeExpenses/>
        <TransactionList/>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />          
        </a>
      </footer>
    </div>
  )
}
