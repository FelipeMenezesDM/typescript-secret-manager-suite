import {GetSecretValueCommand, SecretsManagerClient} from '@aws-sdk/client-secrets-manager';
import {Suite} from './Suite';

export class AWSSuite extends Suite {
    public async getSecretData(secretName: string) {
        const client = new SecretsManagerClient({
            region: process.env.AWS_DEFAULT_REGION || 'us-east-1',
            endpoint: process.env.AWS_ENDPOINT || '',
        });

        const command = new GetSecretValueCommand({
            SecretId: secretName,
        });

        const response = await client.send(command);

        return <string> response.SecretString;
    }
}

export default new AWSSuite();
