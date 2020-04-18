// represent the data of a task, and that will also contain the task Id created by Cloud Firestore
export interface TodoViewModel {
    title: string;
    id: string;
    description: string;
    done: boolean;
    lastModifiedDate: Date;
}
