import Swal from "sweetalert2";

export const showSuccess = (title: string, text: string) => {
  return Swal.fire({
    icon: "success",
    title,
    text,
    confirmButtonColor: "#7C9CFF",
  });
};

export const showError = (title: string, text: string) => {
  return Swal.fire({
    icon: "error",
    title,
    text,
    confirmButtonColor: "#EF4444",
  });
};

export const showWarning = (title: string, text: string) => {
  return Swal.fire({
    icon: "warning",
    title,
    text,
    confirmButtonColor: "#F59E0B",
  });
};

export const showConfirm = (title: string, text: string) => {
  return Swal.fire({
    icon: "question",
    title,
    text,

    showCancelButton: true,

    confirmButtonText: "Continue",

    cancelButtonText: "Cancel",

    confirmButtonColor: "#7C9CFF",

    cancelButtonColor: "#475569",
  });
};

export const showLoading = (title: string, text?: string) => {
  Swal.fire({
    title,
    text,

    allowOutsideClick: false,
    allowEscapeKey: false,

    didOpen: () => {
      Swal.showLoading();
    },
  });
};

export const closeLoading = () => {
  Swal.close();
};

export function showLoginRequired(title: string, text: string) {
  return Swal.fire({
    icon: "warning",

    title,

    text,

    showCancelButton: true,

    confirmButtonText: "Sign In",

    cancelButtonText: "Cancel",
  });
}
