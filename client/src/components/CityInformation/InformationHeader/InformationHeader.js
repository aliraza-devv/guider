import {useNavigate} from 'react-router-dom';
import {AppBar, Toolbar, Typography, Box} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import useStyles from './styles';

const InformationHeader = props => {

    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <AppBar position='static' style={{ background: '#28a654' }}>
            <Toolbar className={classes.toolbar}>
                <ArrowBackIcon className={classes.iconBack} onClick={() => navigate(-1)} />
                <Box display="flex">
                    <Typography variant="h5" className={classes.title}>
                        Place Name: 
                    </Typography>
                    <Typography variant="h5" className={classes.placeName}>
                        {props.placeName}
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default InformationHeader;