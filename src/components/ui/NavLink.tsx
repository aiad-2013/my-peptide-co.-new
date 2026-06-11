import { Link } from '@tanstack/react-router';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

// TanStack Router's Link handles active state natively via activeProps/inactiveProps.
// This wrapper keeps the same API as the old NavLink for any components that use it.

interface NavLinkCompatProps {
  to: string;
  className?: string;
  activeClassName?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  [key: string]: unknown;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, to, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        to={to}
        className={className}
        activeProps={activeClassName ? { className: cn(className, activeClassName) } : undefined}
        {...props}
      />
    );
  },
);

NavLink.displayName = 'NavLink';

export { NavLink };
