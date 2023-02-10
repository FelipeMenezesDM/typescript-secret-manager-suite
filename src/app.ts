import AWSSuite from './suite/AWSSuite';
import GCPSuite from './suite/GCPSuite';
import Suite from './suite/Suite';

const suite = () => {
    switch((process.env.APP_SUITE || '').toUpperCase()) {
        case 'AWS' :
            return AWSSuite;
            break;
        case 'GCP' :
            return GCPSuite;
            break;
        default :
            return Suite;
            break;
    }
};

export default suite;
