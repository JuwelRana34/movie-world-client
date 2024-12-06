
function Modal() {
  return (
    <div>
        <dialog id="my_modal_1" className="modal">
  <div className="modal-box">
   
    <p className="py-4"> Congrats! you have successfully <span className='text-orange-500 '>Subscribe. </span> </p>
    
    <img className=" mx-auto w-full md:w-64 h-auto" src="https://img.freepik.com/free-vector/party-balloons-with-stars-decoration-event_24877-54078.jpg?t=st=1733496928~exp=1733500528~hmac=93e91044138a44d35c31b6ac812c39477281f5ee7ebce61070c7437ad02d1748&w=740"/>

    <div className="modal-action">
      <form method="dialog">
        
        <button className="btn btn-error text-white">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  )
}

export default Modal