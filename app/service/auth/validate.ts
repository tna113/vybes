/**
 * Validation functions for user input
 */

/**
 * Validates a username according to the following rules:
 * - Must be a string
 * - More than 2 characters
 * - Only allowed symbols: _, -, .
 * - No spaces
 * @param username - The username to validate
 * @returns true if valid, false if not
 */
export function username(username: unknown): boolean {
  // Check if it's a string
  if (typeof username !== 'string') {
    return false;
  }

  // Check length (more than 2 characters)
  if (username.length <= 2) {
    return false;
  }

  // Check for spaces
  if (username.includes(' ')) {
    return false;
  }

  // Check regex pattern (only letters, numbers, _, -, .)
  const usernameRegex = /^[a-zA-Z0-9_.-]+$/;
  if (!usernameRegex.test(username)) {
    return false;
  }

  return true;
}

/**
 * Validates a password according to the following rules:
 * - Must be a string
 * - More than 7 characters
 * @param password - The password to validate
 * @returns true if valid, false if not
 */
export function password(password: unknown): boolean {
  // Check if it's a string
  if (typeof password !== 'string') {
    return false;
  }

  // Check length (more than 7 characters)
  if (password.length <= 7) {
    return false;
  }

  return true;
}

// Create a validate object to allow the requested syntax: validate.username() and validate.password()
export const validate = {
  username,
  password,
};

export default validate;
