const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const HandleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };
  const HandlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };
  return (
    <div className="flex items-center justify-center text-center py-4 px-2 text-me-primary gap-4">
      {page <= 1 ? null : (
        <button
          onClick={HandlePrevPage}
          className="transition-all hover:text-me-accent"
        >
          prev
        </button>
      )}
      <p>
        {page} of {lastPage}
      </p>
      <button
        onClick={HandleNextPage}
        className="transition-all hover:text-me-accent"
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
