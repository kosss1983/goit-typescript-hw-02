export interface FormElements extends HTMLFormControlsCollection {
  form: HTMLInputElement;
}

export interface SearchBarProps {
  onSearch: (query: string) => void;
}
