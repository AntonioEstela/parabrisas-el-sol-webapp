import React from 'react';

interface IconProps {
  className?: string;
}

const MailIcon = React.forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => (
  <svg
    ref={ref}
    {...props}
    className={className}
    width='30'
    height='30'
    fill='none'
    viewBox='0 0 25.5 25.5'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M23 0H3C1.625 0 0.5125 1.125 0.5125 2.5L0.5 17.5C0.5 18.875 1.625 20 3 20H23C24.375 20 25.5 18.875 25.5 17.5V2.5C25.5 1.125 24.375 0 23 0ZM23 17.5H3V5L13 11.25L23 5V17.5ZM13 8.75L3 2.5H23L13 8.75Z'
      fill='white'
    />
  </svg>
));

MailIcon.displayName = 'MailIcon';
export default MailIcon;
