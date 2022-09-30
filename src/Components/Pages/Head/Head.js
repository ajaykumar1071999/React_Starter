import {Link} from 'react-router-dom';
function Head(){
    return (
        <div>
            <ul>
            <Link to="/"><li>Home</li></Link> 
            </ul>
        </div>
    );
} export default Head;