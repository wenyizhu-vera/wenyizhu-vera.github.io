// TypeError: pdfjsLib.getDocument(url).then is not a function. 
// will figure it out later

// Get the URL of the PDF file
var url = '../pdf/Resume_Wenyi Zhu.pdf';

// Get the canvas element
var canvas = document.getElementById('pdf-canvas');

// Initialize the PDF.js library
pdfjsLib.GlobalWorkerOptions.workerSrc = '../pdfjs_build/pdf.worker.js';

// Load the PDF document
pdfjsLib.getDocument(url).then(function (pdf) {
    // Get the first page
    return pdf.getPage(1);
}).then(function (page) {
    // Get the viewport
    var viewport = page.getViewport({ scale: 1 });

    // Set the canvas dimensions to the viewport dimensions
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    // Render the PDF page into the canvas context
    var context = canvas.getContext('2d');
    var renderContext = {
        canvasContext: context,
        viewport: viewport
    };
    page.render(renderContext);
});

