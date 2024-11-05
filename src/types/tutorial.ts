// Create a new type file
export interface Tutorial {
    title: string;
    description: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    category: string;
    steps: TutorialStep[];
}

export interface TutorialStep {
    title: string;
    content: string;
    code?: string;
    image?: string;
} 