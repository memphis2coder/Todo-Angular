// This interface represents the fields that we are going to save in a Cloud Firestore
export interface Todo {
    title: string;
    description: string;
    done: boolean;
    createdDate: Date;
    lastModifiedDate: Date;
};


