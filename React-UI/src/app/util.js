import moment from 'moment';

const toDateFormat = (timestamp) => moment.unix(timestamp).format('MMM Do YYYY, HH:mm:ss');

export default toDateFormat;