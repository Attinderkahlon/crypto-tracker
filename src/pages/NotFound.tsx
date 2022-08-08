import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="text-center">
      <h1>Sorry</h1>
      <h2>This page cannot be found</h2>
      <Link to="/">Back to the homepage...</Link>
      <img className="h-80 w-80 mx-auto rounded-xl mt-8" src={"/images/404.webp"} alt="Page Not Found" />

    </div>
  )
}

export default NotFound
