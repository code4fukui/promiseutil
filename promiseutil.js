const dummy = () => new Promise(resolve => setTimeout(() => resolve(false), 0));
export const isResolved = p => p ? Promise.race([dummy(), p.then(() => true, () => false)]) : false;
export const isRejected = p => p ? Promise.race([dummy(), p.then(() => false, () => true)]) : false;
export const isFinished = p => p ? Promise.race([dummy(), p.then(() => true, () => true)]) : false;
