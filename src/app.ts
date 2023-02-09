import {AWSSuite} from './suite/AWSSuite';
import {GCPSuite} from './suite/GCPSuite';
import {Suite} from './suite/Suite';

const suite = () => {
    switch((process.env.APP_SUITE || '').toUpperCase()) {
        case 'AWS' :
            return AWSSuite.getInstance();
            break;
        case 'GCP' :
            return GCPSuite.getInstance();
            break;
        default :
            return Suite.getInstance();
            break;
    }
};

export default suite;