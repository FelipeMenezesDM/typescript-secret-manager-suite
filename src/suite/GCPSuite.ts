import {SecretManagerServiceClient} from '@google-cloud/secret-manager';
import {Suite} from './Suite';

export class GCPSuite extends Suite {
    public async getSecretData(secretName: string) {
        if(secretName == '') {
            return secretName;
        }

        const cached = await this.getCache(secretName);

        if(cached) {
            return cached.toString();
        }

        const client = new SecretManagerServiceClient();
        const secretFullName = `projects/${process.env.GCP_PROJECT_ID || ''}/secrets/${secretName}/versions/latest`;
        const secret = await client.accessSecretVersion({name: secretFullName});
        const response = (secret[0].payload?.data || '').toString();

        if(response != '') {
            return (await this.putCache(secretName, response) || '').toString();
        }

        return response;
    }
}

export default new GCPSuite();
