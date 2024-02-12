import './daisy.css';
import Carpel from './Carpel';
import Petal from './Petal';
import Stem from './Stem';

function Daisy() {
    return (
        <>
            <div className="cover-daisy">
                <Petal />
                <Carpel />
                <Stem />
            </div>
        </>
    )
}

export default Daisy;