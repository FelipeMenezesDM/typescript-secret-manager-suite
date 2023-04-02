import AWSSuite from './Suite/AWSSuite';
import GCPSuite from './Suite/GCPSuite';
import Suite from './Suite/Suite';

const suite = () => {
    switch((process.env.APP_SUITE || '').toUpperCase()) {
        case 'AWS' :
            return AWSSuite;
        case 'GCP' :
            return GCPSuite;
        default :
            return Suite;
    }
};

export default suite;
