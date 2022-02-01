import React, {useState, useContext} from 'react'
import ReactModal from 'react-modal';
import { GlobalContext } from '../../context/GlobalState';
import {formatDate} from '../../utils/formatDate'
import {incomeCategories,expenseCategories} from '../../constants/categories'
import {v4 as uuidv4} from 'uuid'

ReactModal.setAppElement('*')

const initialState = {
  text: '',
  amount: 0,
  category: '',
  type: 'Expense',
  date: formatDate(new Date()),
}

export const TransactionModal = (props) => {
  const {show,hide}=props
  const [formData,setFormData] = useState(initialState)

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    if (Number.isNaN(Number(formData.amount)) || !formData.date.includes('-')) return

    if (incomeCategories.map((iC) => iC.type).includes(formData.category)) {
      setFormData({ ...formData, type: 'Income' });
    } else if (expenseCategories.map((eC) => eC.type).includes(formData.category)) {
      setFormData({ ...formData, type: 'Expense' });
    }

    const newTransaction = {
      ...formData,
      id: uuidv4(),
      text: formData.text,
      amount: Math.abs(Number(formData.amount)),
    }

    addTransaction(newTransaction);
    return setFormData(initialState)
  }

  const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories

  return (
    <>
      <ReactModal
        isOpen={show}
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none"
        contentLabel='siuNhanGao'
        onRequestClose={hide}
        overlayClassName='fixed inset-0 bg-black'
        shouldCloseOnEsc={true}
      >
        <div className="relative w-full my-auto mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                Transaction
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black-500 float-right text-3xl leading-none font-bold outline-none focus:outline-none"
                onClick={hide}
              >
                <span className="bg-transparent text-black-500 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  x
                </span>
              </button>
            </div>
            {/*body*/}
            <form onSubmit={onSubmit}>
              <div className="relative p-6 flex-auto">            
                  
                  <div className="form-control ">
                    <label 
                      className='inline-block my-2' 
                      htmlFor="text"
                    >Text</label>
                    <input 
                      className='rounded-sm block text-base p-2 w-full border-2 outline-none' 
                      type="text" 
                      value={formData.text} 
                      onChange={(e) => setFormData({...formData,text:e.target.value})} 
                      placeholder="Enter text..." 
                      required
                    />
                  </div>
                  
                  <div className='flex'>
                    <div className='w-full mr-1'>
                      <label 
                        className='inline-block my-2' 
                        htmlFor="type"
                      >
                        Type                       
                      </label>
                      <div className="block relative">                      
                        <select 
                          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                          value={formData.type}
                          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        >
                          <option value="Expense">Expense</option>
                          <option value="Income">Income</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg 
                            className="fill-current h-4 w-4" 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div className='w-full ml-1'>
                      <label 
                        className='inline-block my-2' 
                        htmlFor="category"
                      >
                        Category                       
                      </label>
                      <div className="block relative">                      
                        <select 
                          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          required
                        >
                          <option>-- select --</option>
                          {selectedCategories.map((c) => <option key={c.type} value={c.type}>{c.type}</option>)}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg 
                            className="fill-current h-4 w-4" 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-control ">
                    <label 
                      className='inline-block my-2' 
                      htmlFor="date"
                    >
                      Date
                    </label>
                    <input 
                      className='rounded-sm block text-base p-2 w-full border-2 outline-none' 
                      type="date" 
                      value={formData.date} 
                      onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value) })}
                    />
                  </div>
                  
                  <div className="form-control ">
                    <label 
                      className='inline-block my-2' 
                      htmlFor="amount"
                    >
                      Amount
                    </label>
                    <input 
                      className='rounded-sm block text-base p-2 w-full border-2 outline-none' 
                      type="number" 
                      value={formData.amount} 
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })} 
                      placeholder="Enter amount..."
                    />
                  </div>                      
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={hide}
                >
                  Close
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"
                  onClick={(e)=>{onSubmit(e);hide()}}
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </ReactModal>
      
    </>
  )
}