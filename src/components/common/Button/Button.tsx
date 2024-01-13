import React from 'react';

export type ButtonProps = React.PropsWithChildren<{
  /** ボタン使用をOFFにするか */
  disabled?: boolean;
  /** ボタンの大きさ(デフォルト:md) */
  size?: 'sm' | 'md' | 'lg';
  /** ボタンの種類(デフォルト: contained) */
  variant?: 'text' | 'outlined' | 'contained';
  /** ボタンの色(デフォルト: primary) */
  color?: 'primary' | 'secondary';
}>;

const sizeVariants = {
  sm: 'py-1 px-2 text-sm',
  md: 'py-2 px-5 text-base',
  lg: 'py-3 px-8 text-lg',
};

type VariantStyleKey = `${NonNullable<ButtonProps['variant']>}-${NonNullable<ButtonProps['color']>}`;

const variantStyles: Record<VariantStyleKey, string> = {
  'text-primary':
    'text-primary-default  border-transparent enabled:hover:bg-primary-100 enabled:active:bg-primary-200 disabled:text-gray-300',
  'outlined-primary':
    'border border-primary-default text-primary-default enabled:hover:bg-primary-100 enabled:active:bg-primary-200 disabled:text-gray-300 disabled:border-gray-300',
  'contained-primary': 'bg-primary-default hover:bg-primary-200 enabled:active:bg-primary-400 text-white disabled:bg-gray-300',
  'text-secondary':
    'text-secondary-500  border-transparent enabled:hover:bg-secondary-100 enabled:active:bg-secondary-200 disabled:text-gray-300',
  'outlined-secondary':
    'border border-secondary-default text-secondary-default enabled:hover:bg-secondary-100 enabled:active:bg-secondary-200 disabled:text-gray-300 disabled:border-gray-300',
  'contained-secondary': 'bg-secondary-default hover:bg-secondary-200 active:bg-secondary-400 text-white disabled:bg-gray-300',
};

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  color = 'primary',
  size = 'md',
  variant = 'contained',
}) => {
  const colorVariantKey = `${variant}-${color}` as const;

  return (
    <button
      className={` ${sizeVariants[size]} ${variantStyles[colorVariantKey]}  disabled:cursor-not-allowed rounded-md uppercase transition ease-in-out`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
