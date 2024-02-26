type SelectOptions = {
  id: string;
  value: string;
  label: string;
};

type ValidationType = {
  type: string;
  message: string;
  value?: number;
};

export interface InputType {
  type: string;
  name: string;
  placeholder?: string;
  label: string;
  value: string;
  options?: SelectOptions[];
  validations?: ValidationType[];
}
