import { ReactNode } from "react"

export type ModalType = {
    children: ReactNode;
    onClose: () => void;
}

