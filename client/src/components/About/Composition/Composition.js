import {Desert, Nature, River} from '../../../assets/img/index';

const Composition = () => {
    return (
        <div className='composition'>
            <img src={Desert} className="composition__photo composition__photo--p1" alt='p1' />
            <img src={Nature} className="composition__photo composition__photo--p2" alt='p2' />
            <img src={River} className="composition__photo composition__photo--p3" alt='p3' />
        </div>
    );
};

export default Composition;