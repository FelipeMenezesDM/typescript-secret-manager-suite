import {GetSecretValueCommand, SecretsManagerClient} from '@aws-sdk/client-secrets-manager';
import {Suite} from './Suite';

export class AWSSuite extends Suite {
    public async getSecretData(secretName: string) {
        if(secretName == '') {
            return secretName;
        }

        const cached = await this.getCache(secretName);

        if(cached) {
            return cached.toString();
        }

        const client = new SecretsManagerClient({region: process.env.AWS_DEFAULT_REGION || 'us-east-1', endpoint: process.env.AWS_ENDPOINT || ''});
        const command = new GetSecretValueCommand({SecretId: secretName});
        const response = await client.send(command);
        const secret = <string> response.SecretString;

        if(secret && secret != '') {
            return (await this.putCache(secretName, secret) || '').toString();
        }

        return secret;
    }
}

export default new AWSSuite();
