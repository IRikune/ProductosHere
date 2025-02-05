
export const useWait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

