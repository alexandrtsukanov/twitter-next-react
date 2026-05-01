export type TBuuttonTheme = 'primary' | 'secondary' | 'danger';

export interface IAuthNavbarItem {
    label: string;
    theme: TBuuttonTheme;
    onClick: () => void;
};
