import './Error.css'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='error'>
             <Link to={"/"}>
                <img src="https://files.muzli.space/43e6e439756832db0ff5dd2b76ffef5c.jpeg" alt="404-img"/>
             </Link>
        </div>
    )
}

export default Error;
