import React from 'react';

interface IconProps {
  className?: string;
}

const WhatsappIcon = React.forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => (
  <svg ref={ref} {...props} className={className} width='30' height='30' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M0 30L2.10875 22.2962C0.807498 20.0413 0.12375 17.485 0.125 14.8637C0.12875 6.66875 6.79749 0 14.9912 0C18.9675 0.00125 22.7 1.55 25.5074 4.36C28.3137 7.17 29.8587 10.905 29.8574 14.8775C29.8537 23.0738 23.1849 29.7425 14.9912 29.7425C12.5037 29.7413 10.0525 29.1175 7.88123 27.9325L0 30ZM8.24623 25.2413C10.3412 26.485 12.3412 27.23 14.9862 27.2313C21.7962 27.2313 27.3437 21.6887 27.3474 14.875C27.3499 8.0475 21.8287 2.5125 14.9962 2.51C8.18123 2.51 2.63749 8.0525 2.63499 14.865C2.63374 17.6462 3.44874 19.7287 4.81749 21.9075L3.56874 26.4675L8.24623 25.2413ZM22.48 18.4113C22.3875 18.2563 22.14 18.1637 21.7675 17.9775C21.3962 17.7913 19.57 16.8925 19.2287 16.7687C18.8887 16.645 18.6412 16.5825 18.3925 16.955C18.145 17.3263 17.4325 18.1637 17.2162 18.4113C17 18.6588 16.7825 18.69 16.4112 18.5037C16.04 18.3175 14.8425 17.9263 13.4237 16.66C12.32 15.675 11.5737 14.4587 11.3575 14.0863C11.1412 13.715 11.335 13.5138 11.52 13.3288C11.6875 13.1625 11.8912 12.895 12.0775 12.6775C12.2662 12.4625 12.3275 12.3075 12.4525 12.0588C12.5762 11.8113 12.515 11.5938 12.4212 11.4075C12.3275 11.2225 11.585 9.39375 11.2762 8.65C10.9737 7.92625 10.6675 8.02375 10.44 8.0125L9.72748 8C9.47998 8 9.07748 8.0925 8.73748 8.465C8.39748 8.8375 7.43748 9.735 7.43748 11.5638C7.43748 13.3925 8.76873 15.1587 8.95373 15.4062C9.13998 15.6537 11.5725 19.4062 15.2987 21.015C16.185 21.3975 16.8775 21.6262 17.4162 21.7975C18.3062 22.08 19.1162 22.04 19.7562 21.945C20.47 21.8387 21.9537 21.0462 22.2637 20.1787C22.5737 19.31 22.5737 18.5662 22.48 18.4113Z'
      fill='white'
    />
  </svg>
));

WhatsappIcon.displayName = 'WhatsappIcon';
export default WhatsappIcon;