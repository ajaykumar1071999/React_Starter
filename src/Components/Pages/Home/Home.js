import {Link} from 'react-router-dom';
function Home(){
    return (
        <div>
            <ul>
            <Link to="/"><li>Home</li></Link> 
            </ul>
        </div>
    );
} export default Home;