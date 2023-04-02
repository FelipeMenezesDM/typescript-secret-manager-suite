import CacheSecrets from "../Generic/CacheSecrets";
import crypto from "crypto";

export class Suite {
    public async getSecretData(secretName: string) {
        return secretName;
    }

    private async getCacheKey(key: string) {
        const hash = crypto.createHash('sha512');
        hash.update(key)

        return `secret[${hash.digest('hex')}]`;
    }

    protected async getCache(secretName: string) {
        return CacheSecrets.get(await this.getCacheKey(secretName));
    }

    protected async putCache(secretName: string, secret: string) {
        return CacheSecrets.set(await this.getCacheKey(secretName), secret);
    }
}

export default new Suite();
