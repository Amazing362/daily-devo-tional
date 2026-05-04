
  const button = document.getElementById("openModalBtn");
  const select = document.getElementById("churchFilter");

  button.addEventListener("click", function () {
    const selectedPage = select.value;

    if (selectedPage) {
      window.location.href = selectedPage;
    } else {
      alert("Please select a devotional.");
    }
  })