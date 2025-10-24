// Types para la aplicación Scobel

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  subject: string;
}

export interface NavItem {
  label: string;
  path: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

export interface DropdownItem {
  label: string;
  path: string;
  description?: string;
}
