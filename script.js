alert("Tämä on minun portfolio!");
assets/scripts.js
    try {
  // Yritä suorittaa jotain, joka saattaa aiheuttaa virheen
  // Tässä voisi olla esimerkiksi epäonnistunut API-kutsu
  fetch(https://html-css-js.com/)
    .then((response) => {
      if (!response.ok) {
        throw new Error('API-kutsu epäonnistui');
      }
      return response.json();
    })
    .then((data) => {
      // Käsittele data normaalisti
    });
} catch (error) {
  // Jos virhe tapahtuu, seuraava lohko käsittelee sen
  console.error('Virhe API-kutsussa:', error);
  // Tee tarvittavat toimenpiteet virheen varalta
}
   
