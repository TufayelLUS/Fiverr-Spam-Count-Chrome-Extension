fetch("https://www.fiverr.com/inbox/counters")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text();
  })
  .then((data) => {
    var stat = JSON.parse(data);
    var spam_count = stat.spam;
    var dashboard = document.querySelector('.seller-main-item');
    dashboard.innerHTML = dashboard.innerHTML + ' &nbsp;<span style="color:red">(' + spam_count + ' spam)</span>';
  })
  .catch((error) => {
    console.error(error);
  });
