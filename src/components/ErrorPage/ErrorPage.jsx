import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="text-center">
          <h2>Opps!!</h2>
          <p>{error.statusText || error.message}</p>
          {
            error.status === 404 && <div>
                <h3>Page Not Found</h3>
                <p>Go back</p>
                <Link to='/'><button className="btn">Home</button></Link>
            </div>
          }
        </div> 
    );
};

export default ErrorPage;