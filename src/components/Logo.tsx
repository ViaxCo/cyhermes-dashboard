const Logo = (props: any) => {
  // svg to jsx using https://react-svgr.com/playground/
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.3 39.71" {...props}>
      <defs>
        <style>{".prefix__cls-1{fill:#fff}"}</style>
      </defs>
      <g id="prefix__Layer_2" data-name="Layer 2">
        <g id="prefix__Layer_1-2" data-name="Layer 1">
          <path
            fill="#fff"
            d="M9.56 30.21l5.17.46v9H0V.05c6 0 11.8-.19 17.57.16 1.19.07 2.61 2 3.27 3.31.77 1.57.81 3.49 1.27 5.77H9.56zM49.3 0v39.68H34.55v-9l5.3-.57V9.54H27.67C27.91.3 28.15 0 36.07 0z"
          />
          <path d="M24.55 29.25l6.39 10.43h-12.5z" fill="#fc0" />
        </g>
      </g>
    </svg>
  );
};

export default Logo;
