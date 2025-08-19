function generateCertificate() {
    let name = document.getElementById("nameInput").value;
    let certNo = document.getElementById("certNoInput").value;
  
    if (name.trim() !== "") {
      // Student name
      document.getElementById("studentName").innerText = name;
  
      // Certificate number
      document.getElementById("certNo").innerText = certNo;
  
      // Date (auto today)
      let today = new Date();
      let dateStr = today.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric"
      });
      document.getElementById("date").innerText = dateStr;
    } else {
      alert("Please enter your name!");
    }
  }

  function downloadCertificate() {
    const certificate = document.getElementById("certificate");
    const opt = {
      margin:       0,
      filename:     'certificate.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
    };
    html2pdf().set(opt).from(certificate).save();
  }