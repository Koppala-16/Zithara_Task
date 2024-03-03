const Pages = ({onPageChange,currentPage,totalPages}) => {
    const page={
      marginLeft:"550px",
      height:"50px",
      fontSize:"15px",
      marginTop:"20px",
    };
    const button2={
      fontSize:"20px",
      marginLeft:"100px",
    };
    const button1={
      fontSize:"20px",
      marginRight:"100px",
    };
    return ( 
        <div className="Pages" style={page}>
        <button style={button1}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        <span>{`Page ${currentPage} of ${totalPages}` }</span>
        <button style={button2}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
     );
}
export default Pages;