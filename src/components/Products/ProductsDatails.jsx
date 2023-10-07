import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import pdfFile from '../../assets/data.pdf';
import './Products.css'
function PDFViewer() {
    // const downloadPdf = () => {
    //     const link = document.createElement('a');
    //     link.href = pdfFile;
    //     link.download = 'document.pdf';
    //     link.click();
    // };


    return (
        <div className="pdf-container mx-auto" style={{
            border: '1px solid rgba(0, 0, 0, 0.3)',
            height: '750px',
            width:'70%',
            overflow:'scroll'
        }}>
            {/* <div className="pdf-controls">
                <button onClick={downloadPdf} className='btn btn-success'>Download PDF</button>
            </div> */}
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer
                    fileUrl={pdfFile}
                                    />
            </Worker>
        </div>
    );
}

export default PDFViewer;
