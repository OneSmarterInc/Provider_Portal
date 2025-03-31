const PdfPreview = ({ fileUrl }) => {
    return (
      <iframe
        src={fileUrl}
        width="100%"
        height="600px"
        title="PDF Preview"
      />
    );
  };
  
  export default PdfPreview;
  