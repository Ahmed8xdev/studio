type ContactResult = { success: boolean; message: string };

export async function runContactSubmission<T>(
  values: T,
  submit: (values: T) => Promise<ContactResult>,
  callbacks: {
    setSubmitting: (busy: boolean) => void;
    notifySuccess: (message: string) => void;
    notifyFailure: (message: string) => void;
    reset: () => void;
  },
): Promise<void> {
  callbacks.setSubmitting(true);
  try {
    const result = await submit(values);
    if (result.success) {
      callbacks.notifySuccess(result.message);
      callbacks.reset();
    } else {
      callbacks.notifyFailure(result.message);
    }
  } catch {
    // Network failure and rejected server actions must not leave the form stuck.
    callbacks.notifyFailure("The demo form could not complete. Please try again.");
  } finally {
    callbacks.setSubmitting(false);
  }
}
