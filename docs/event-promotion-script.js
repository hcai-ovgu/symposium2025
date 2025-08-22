document.addEventListener('DOMContentLoaded', function() {
    const pdfPreviews = document.querySelectorAll('.pdf-preview');

    pdfPreviews.forEach(preview => {
        const pdfUrl = preview.dataset.pdf;
        
        // Load the PDF
        pdfjsLib.getDocument(pdfUrl).promise.then(pdf => {
            // Get the first page
            return pdf.getPage(1);
        }).then(page => {
            const scale = 1.5;
            const viewport = page.getViewport({ scale: scale });

            // Create a canvas element to render the page
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            // Render the page on the canvas
            const renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            page.render(renderContext);

            // Add the canvas to the preview div
            preview.appendChild(canvas);
        }).catch(error => {
            console.error('Error loading PDF:', error);
            preview.textContent = 'Error loading PDF preview';
        });
    });
});