// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface IClientsFindEntry {
}

export default class ClientsFindEntry {
    constructor(props: IClientsFindEntry) {
    }

    serialize(): IClientsFindEntry {
        const data: IClientsFindEntry = {
        };
        return data;
    }

    validate(): string[] {
        const validate = {
        };
        const isError: string[] = [];
        Object.keys(validate).forEach((key) => {
            if (!(validate as any)[key]) {
                isError.push(key);
            }
        });
        return isError;
    }

    update(props: Partial<IClientsFindEntry>): ClientsFindEntry {
        return new ClientsFindEntry({ ...this.serialize(), ...props });
    }
}
