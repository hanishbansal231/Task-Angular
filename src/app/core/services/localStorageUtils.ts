

export enum LocalStorageKey {
    TASK = 'Task'
}

export class LocalStorageUtils {

    setInfomation<T>(key: LocalStorageKey, information: T): void {
        console.log('information',information);
        localStorage.setItem(key as LocalStorageKey, JSON.stringify(information as T));
    }

    getInfomation<T>(key: LocalStorageKey): T {
        return JSON.parse((localStorage.getItem(key as LocalStorageKey)) as any);
    }
}