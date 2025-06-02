/**
 * Check if a object is not undefined or null
 *
 * @param obj Object to check
 * @returns boolean
 */
export function isSet(obj: unknown): boolean {
  return (typeof obj !== 'undefined' && obj !== null);
}

/**
 * Check if an object is undefined
 *
 * @param obj
 * @returns
 */
export function isUndefined(obj: unknown): boolean {
  return (typeof obj === 'undefined');
}

/**
 * Check if a value is a string
 *
 * @param param Value to check
 * @returns boolean
 */
export function isString(param: unknown) {
  if(!isSet(param)) return false;
  return (typeof param === 'string' || param instanceof String);
}
