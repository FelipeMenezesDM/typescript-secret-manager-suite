import {SecretManagerServiceClient} from '@google-cloud/secret-manager';
import {Suite} from './Suite';

export class GCPSuite extends Suite {
    public async getSecretData(secretName: string) {
        const client = new SecretManagerServiceClient();
        const response = await client.accessSecretVersion({
            name: `projects/${process.env.GCP_PROJECT_ID || ''}/secrets/${secretName}/versions/latest`,
        });

        return (response[0].payload?.data || '').toString();
    }
}

export default new GCPSuite();
