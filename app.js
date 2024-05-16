document.addEventListener("DOMContentLoaded", () => {
    // Menghitung jumlah deret aritmatika
    function hitungAritmatika(a, n, d) {
        let deret = [];
        for (let i = 0; i < n; i++) {
            deret.push(a + i * d);
        }
        let total = (n / 2) * (2 * a + (n - 1) * d);
        return [total, deret];
    }

    // Mencari nilai suku ke-n aritmatika
    function cariUnAritmatika(a, n, d) {
        return a + (n - 1) * d;
    }

    // Event listener untuk form deret
    document.getElementById('form-deret').addEventListener('submit', (e) => {
        e.preventDefault();
        let a = parseFloat(document.getElementById('a').value);
        let n = parseInt(document.getElementById('n').value);
        let d = parseFloat(document.getElementById('d').value);

        let [hasil, deret] = hitungAritmatika(a, n, d);

        document.getElementById('hasil-deret').innerHTML = `
            <p>Jumlah deret aritmatika: ${hasil}</p>
            <p>Deret aritmatika: ${deret.join(', ')}</p>
        `;
    });

    // Event listener untuk form suku
    document.getElementById('form-suku').addEventListener('submit', (e) => {
        e.preventDefault();
        let a = parseFloat(document.getElementById('a2').value);
        let n = parseInt(document.getElementById('n2').value);
        let d = parseFloat(document.getElementById('d2').value);

        let hasil = cariUnAritmatika(a, n, d);

        document.getElementById('hasil-suku').innerHTML = `
            <p>Nilai suku ke-${n} pada deret aritmatika: ${hasil}</p>
        `;
    });
});
