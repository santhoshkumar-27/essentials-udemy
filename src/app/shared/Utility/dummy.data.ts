export const DUMMY_USERS = [
    {
        id: 'u1',
        name: 'Jasmine Washington',
        avatar: 'user-1.jpg',
    },
    {
        id: 'u2',
        name: 'Emily Thompson',
        avatar: 'user-2.jpg',
    },
    {
        id: 'u3',
        name: 'Marcus Johnson',
        avatar: 'user-3.jpg',
    },
    {
        id: 'u4',
        name: 'David Miller',
        avatar: 'user-4.jpg',
    },
    {
        id: 'u5',
        name: 'Priya Patel',
        avatar: 'user-5.jpg',
    },
    {
        id: 'u6',
        name: 'Arjun Singh',
        avatar: 'user-6.jpg',
    },
];

export const DUMMY_TASKS = [
    {
        id: 't1',
        userId: 'u1',
        title: 'Master Angular',
        summary:
            'Learn all the basic and advanced features of Angular & how to apply them.',
        dueDate: '2025-12-31',
    },
    {
        id: 't2',
        userId: 'u3',
        title: 'Build first prototype',
        summary: 'Build a first prototype of the online shop website',
        dueDate: '2024-05-31',
    },
    {
        id: 't3',
        userId: 'u3',
        title: 'Prepare issue template',
        summary:
            'Prepare and describe an issue template which will help with project management',
        dueDate: '2024-06-15',
    },
]
export interface USER {
    id: string;
    name: string;
    avatar: string;
}

export interface TASK {
    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string;
}

export interface NewTask {
    title: string;
    summary: string;
    dueDate: string;
}