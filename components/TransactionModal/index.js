import React, {useState, useContext} from 'react'
import ReactModal from 'react-modal';
import { GlobalContext } from '../../context/GlobalState';
ReactModal.setAppElement('*')

export const TransactionModal = (props) => {
  const {show,hide}=props
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

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
                  <label className='inline-block my-2' htmlFor="text">Text</label>
                  <input className='rounded-sm block text-base p-2 w-full border-2 outline-none' type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                  </div>
                  <div className="form-control ">
                  <label className='inline-block my-2' htmlFor="amount"
                      >Amount <br />
                      (negative - expense, positive - income)
                  </label>
                  <input className='rounded-sm block text-base p-2 w-full border-2 outline-none' type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
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
                  type="button"
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