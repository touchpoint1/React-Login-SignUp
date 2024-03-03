const IllustrationLayout = ({ imageUrl, children, signup }) => {
  return (
    <div className="h-full grid grid-cols-2">
      <div
        className={
          signup
            ? `hidden`
            : `hidden lg:w-full lg:h-screen lg:flex lg:items-center lg:justify-center`
        }
      >
        <img src={imageUrl} className="w-3/4" alt="Authentication svg" />
      </div>
      {children}
      <div
        className={
          signup
            ? `hidden lg:w-full lg:h-screen lg:flex lg:items-center lg:justify-center`
            : `hidden`
        }
      >
        <img src={imageUrl} className="w-4/5" alt="Authentication svg" />
      </div>
    </div>
  );
};

export default IllustrationLayout;
