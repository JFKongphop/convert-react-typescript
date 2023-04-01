type Input = {
    id: string;
    type: string;
    min: string;
    max: string;
    step: string;
    defaultValue: string;
}

export type Ref = HTMLInputElement;

export type InputProps = {
    label: string;
    input: Input;
}