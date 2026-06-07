const PENDING_ACTION_KEY = "pending_action";

export type PendingAction = "export_pdf";

export function setPendingAction(action: PendingAction) {
  localStorage.setItem(PENDING_ACTION_KEY, action);
}

export function getPendingAction(): PendingAction | null {
  const action = localStorage.getItem(PENDING_ACTION_KEY);

  if (!action) {
    return null;
  }

  return action as PendingAction;
}

export function clearPendingAction() {
  localStorage.removeItem(PENDING_ACTION_KEY);
}
