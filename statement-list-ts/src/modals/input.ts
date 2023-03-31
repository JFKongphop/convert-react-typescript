import { ChangeEvent } from "react"

type InputProps = {
    className: string;
    title: string;
    type: string;
    placeholder: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string | number
}

export default InputProps
