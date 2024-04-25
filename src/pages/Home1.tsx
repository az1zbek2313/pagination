import {useNavigate} from "react-router-dom"
function Home1() {
    const navigate = useNavigate();
  return (
    <div className="container mt-5">
        <div className="card d-flex gap-4 p-5 w-50 mx-auto shadow">
        <button onClick={() => {navigate("/1")}} className="btn btn-primary w-100">Click Pagination</button>
        <button onClick={() => {navigate("/scroll")}} className="btn btn-primary w-100">Scroll Pagination</button>
        </div>
    </div>
  )
}

export default Home1