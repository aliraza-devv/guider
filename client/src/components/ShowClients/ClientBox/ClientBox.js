import HeadingTertiary from '../../UI/HeadingTertiary';

const ClientBox = props => {
    return (
        <div className='client-Box'>
            <div>
                <HeadingTertiary text='Name: ' />
                <h1 className='u-margin-left-max u-margin-top-small'>{props.client.name}</h1>
            </div>
            <div>
                <HeadingTertiary text='Email: ' />
                <h1 className='u-margin-left-max u-margin-top-small'>{props.client.email}</h1>
            </div>
            <div>
                <HeadingTertiary text='Phone No: ' />
                <h1 className='u-margin-left-max u-margin-top-small'>{props.client.phoneNo}</h1>
            </div>
        </div>
    );
}

export default ClientBox;