class CacheSecrets<T> {
    private cache: {[key: string]: T} = {};

    get(key: string): T | undefined {
        return this.cache[key];
    }

    set(key: string, value: T): T | undefined {
        this.cache[key] = value;
        return value;
    }
}

export default new CacheSecrets();