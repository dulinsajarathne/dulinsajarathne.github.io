document.addEventListener('DOMContentLoaded', () => {
    const downloadButtons = document.querySelectorAll('.btn-download-cv');

    downloadButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            try {
                // Path to the CV file in the assets folder
                const cvPath = './assets/Dulinsa_Jarathne_CV.pdf';

                // Create download link
                const link = document.createElement('a');
                link.href = cvPath;
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
