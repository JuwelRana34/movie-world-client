import { Link } from "react-router"


function Notfound() {
  return (
    <div className="text-center">
        <img className="mx-auto" src="https://img.freepik.com/premium-vector/illustrations-frustrated-expression-woman-oops-404-error-design-concept-landing-page_576269-379.jpg?ga=GA1.1.1974322130.1689523785&semt=ais_hybrid" alt=""  />

        <Link to={'/'} className='py-2 px-3 rounded-md bg-gradient-to-r from-rose-500 to-orange-600 text-white'> Back to Home </Link>
    </div>
  )
}

export default Notfound