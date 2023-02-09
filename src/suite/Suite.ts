export class Suite {
    public static getInstance() {
        return new this;
    }

    public async getSecretData(secretName: string) {
        return secretName;
    }
}
