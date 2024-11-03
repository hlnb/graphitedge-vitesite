export const formatDate = (date: string): string => {
    return new Date(date).toLocaleDateString();
};

export const formatContent = (content: string): string => {
    return content;
}; 