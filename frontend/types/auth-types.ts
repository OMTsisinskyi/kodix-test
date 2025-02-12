export type AuthFormState =
  | {
      error?: {
        firstName?: string[];
        lastName?: string[];
        email?: string[];
        password?: string[];
      };

      message?: string;
    }
  | undefined;
