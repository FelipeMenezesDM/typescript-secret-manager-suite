import AWSSuite from './suite/AWSSuite';
import GCPSuite from './suite/GCPSuite';
import Suite from './suite/Suite';

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
