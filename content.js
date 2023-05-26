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
    var unread_count = stat.unread;
    var dashboard = document.querySelector('.seller-main-item');
    var title = document.querySelector('title');
    dashboard.innerHTML = dashboard.innerHTML + ' &nbsp;<span style="color:red">(' + spam_count + ' spam)</span>';
    if (unread_count > 0){
      title.innerHTML = title.innerHTML + ' &nbsp;[' + unread_count + ' messages]';
    }
  })
  .catch((error) => {
    // console.log(error);
  });
