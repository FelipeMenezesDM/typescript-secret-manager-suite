import {SecretManagerServiceClient} from '@google-cloud/secret-manager';
import GeneralProps from '../props/GeneralProps';
import {Suite} from './Suite';

export class GCPSuite extends Suite {
    public async getSecretData(secretName: string) {
        const client = new SecretManagerServiceClient();
        const response = await client.accessSecretVersion({
            name: `projects/${GeneralProps.projectId}/secrets/${secretName}/versions/latest`,
        });

        return (response[0].payload?.data || '').toString();
    }
}

export default new GCPSuite();
