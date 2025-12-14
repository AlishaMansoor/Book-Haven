
  const toggleBtn = document.getElementById('mobileSearchToggle');
  const searchBar = document.getElementById('mobileSearchBar');

  toggleBtn.addEventListener('click', () => {
    searchBar.classList.toggle('d-none');
   
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 992) {
      mobileSearchBar.classList.add("d-none");
    }
  });
