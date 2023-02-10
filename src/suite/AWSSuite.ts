import {GetSecretValueCommand, SecretsManagerClient} from '@aws-sdk/client-secrets-manager';
import GeneralProps from '../props/GeneralProps';
import {Suite} from './Suite';

export class AWSSuite extends Suite {
    public async getSecretData(secretName: string) {
        const client = new SecretsManagerClient({
            region: GeneralProps.region,
            endpoint: GeneralProps.endPoint,
        });

        const command = new GetSecretValueCommand({
            SecretId: secretName,
        });

        const response = await client.send(command);

        return <string> response.SecretString;
    }
}

export default new AWSSuite();
