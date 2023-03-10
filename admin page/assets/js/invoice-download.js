window.onload = function()
{
    document.getElementById("download")
    .addEventListener("click",()=> 
    {
        const invoice = this.document.getElementById("invoice");
        let opt = 
        {
            filename:     'invoice',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(invoice).set(opt).save();
    })
}