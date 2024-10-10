import { type VariantProps, cva } from 'class-variance-authority';

export { default as Button } from './Button.vue';
export { default as RainbowButton } from './RainbowButton.vue';

export const buttonVariants = cva(
  'inline-flex items-center active:translate-y-1 hover:-translate-y-[2px] transition-all duration-300 ease-in-out justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary-foreground border hover:shadow-blured border-primary text-white ',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'px-4 py-2',
        xs: 'rounded px-2',
        sm: 'rounded-md px-3',
        lg: 'rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
