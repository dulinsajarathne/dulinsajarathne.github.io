document.addEventListener('DOMContentLoaded', () => {
    const downloadButtons = document.querySelectorAll('.btn-download-cv');
    
    // Base64 encoded sample CV (replace with your actual CV's base64 content)
    const sampleCvBase64 = `
    JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwog
    IC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAv
    TWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0K
    Pj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAg
    L1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+
    Pgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9udAogIC9TdWJ0eXBlIC9UeXBl
    MQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2JqCgp0cmFpbGVyCjw8CiAgL1Jv
    b3QgMSAwIFIKPj4KJSVFTkQ=
    `.replace(/\s/g, ''); // Remove whitespace

    downloadButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            try {
                // Convert base64 to Blob
                const byteCharacters = atob(sampleCvBase64);
                const byteNumbers = new Array(byteCharacters.length);
                for (let i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                }
                const byteArray = new Uint8Array(byteNumbers);
                const blob = new Blob([byteArray], {type: 'application/pdf'});

                // Create download link
                const link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = 'Dulinsa_Jarathne_CV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } catch (error) {
                console.error('Download error:', error);
                alert('Unable to download CV. Please contact the website administrator.');
            }
        });
    });
});